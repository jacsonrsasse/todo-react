import { useEffect, useState } from 'react';
import { AppContainer } from './style';
import { TasksGrid } from '../../components/TasksGrid';
import { ButtonArea } from '../../components/ButtonArea';
import { Button } from '../../components/Button';
import { Task } from '../../components/Task';
import { NewTaskDialog } from '../../components/NewTaskDialog';
import IndexedDBTasksHandler from '../../utils/IndexedDBTasksHandler';
import ITask from '../../utils/taks';

enum Operacao {
    nenhuma = 0,
    inclusao = 1,
    alteracao = 2,
    exclusao = 3,
}

export default function App() {
    const [operacao, setOperacao] = useState(Operacao.nenhuma);
    const [task, setTask] = useState( {} );
    const [tasks, setTasks] = useState(Array<ITask>);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        console.log('didMount');
        const runDb = async () => {
            const indexedDb = new IndexedDBTasksHandler();
            await indexedDb.openDB();
            const tasks = await indexedDb.getAllTasks();
            setTasks((t) => [...t, ...tasks]);
        };
        runDb();
    }, []);

    useEffect(() => {
        const runDb = async () => {
            const indexedDb = new IndexedDBTasksHandler();
            await indexedDb.openDB();

            const newTask = task as ITask;

            switch (operacao) {
                case Operacao.inclusao:
                    await indexedDb.addTask(newTask);
                    break;
                case Operacao.alteracao:
                    await indexedDb.updateTask(newTask);
                    break;
                case Operacao.exclusao:
                    await indexedDb.deleteTask(newTask.key);
                    break;
            }
            setOperacao(Operacao.nenhuma);
            setTask({});
        };
        runDb();
    }, [tasks]);

    useEffect(() => {
        return () => {
            setOperacao(Operacao.nenhuma);
            setTask({});
        };
    }, []);

    const handleDeleteTask = (key: number) => {
        const tasksUpdated = tasks.filter((task: ITask) => task.key !== key);
        setOperacao(Operacao.exclusao);
        setTask({ key: key });
        setTasks(tasksUpdated);
    };

    const handleUpdateTask = (key: number, isChecked: boolean) => {
        const newTasks = tasks.map((task: ITask) =>
            task.key === key ? { ...task, updatedAt: isChecked ? new Date().toLocaleString() : '' } : task,
        ) as never[];
        const newTask = newTasks.filter((task: ITask) => task.key === key)[0];
        setOperacao(Operacao.alteracao);
        setTask(newTask);
        setTasks(newTasks);
    };

    const handlerAddNewTask = () => {
        const titleField = document.getElementById('task-title');
        const title = (titleField as HTMLInputElement).value;
        const description = (document.getElementById('task-description') as HTMLInputElement).value;
        if (!title) {
            titleField?.classList.toggle('required');
            setTimeout(() => titleField?.classList.toggle('required'), 1000);
            return;
        }
        const task = {
            key: tasks.reduce((prev, curr: ITask) => (curr.key < prev ? prev : curr.key), 0) + 1,
            title: title,
            description: description,
            createdAt: new Date().toLocaleString('pt-br'),
            updatedAt: '',
        };
        setOperacao(Operacao.inclusao);
        setTask(task);
        setTasks([...tasks, task] as never[]);
        setIsModalVisible(false);
    };

    return (
        <AppContainer id="app">
            <TasksGrid>
                {tasks.map((info: ITask) => (
                    <Task
                        key={info.key}
                        taskInfo={info}
                        handleDeleteTask={handleDeleteTask}
                        handleUpdateTask={handleUpdateTask}
                    />
                ))}
            </TasksGrid>
            {isModalVisible && (
                <NewTaskDialog
                    handleConfirmButton={handlerAddNewTask}
                    handleCloseButton={() => setIsModalVisible(false)}
                />
            )}
            <ButtonArea>
                <Button text="Nova Tarefa" onClick={() => setIsModalVisible(true)} />
            </ButtonArea>
        </AppContainer>
    );
}
