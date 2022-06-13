import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TasksGrid } from '../../components/TasksGrid';
import { ButtonArea } from '../../components/ButtonArea';
import { Button } from '../../components/Button';
import { Task } from '../../components/Task';
import IndexedDBTasksHandler from '../../utils/IndexedDBTasksHandler';
import ITask from '../../utils/ITask';

const AppContainer = styled.div`
  height: 80vh;
  max-height: 80vh;
  width: 400px;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 5px 5px 15px;
  display: grid;
  grid-template-rows: 1fr 50px;
  gap: 5px;
  padding: 20px;
  padding-bottom: 5px;
  background-color: ${(props) => props.theme.corSistemaBase9};
`;

enum Operacao {
  nenhuma = 0,
  inclusao = 1,
  alteracao = 2,
  exclusao = 3,
}

function App() {
  const [operacao, setOperacao] = useState(Operacao.nenhuma);
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('didMount');
    const runDb = async () => {
      const indexedDb = new IndexedDBTasksHandler();
      await indexedDb.openDB();
      const tasks = await indexedDb.getAllTasks();
      setTasks(tasks);
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
    const title = prompt('Título da Tarefa:');
    if (!title) {
      return;
    }
    const description = prompt('Descrição da Tarefa:');
    if (!description) {
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

      <ButtonArea>
        <Button text="Nova Tarefa" onClick={handlerAddNewTask} />
      </ButtonArea>
    </AppContainer>
  );
}

export default App;
