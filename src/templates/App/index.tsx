import React, { useState } from 'react';
import styled from 'styled-components';
import { TasksGrid } from '../../components/TasksGrid';
import { ButtonArea } from '../../components/ButtonArea';
import { Button } from '../../components/Button';
import { Task } from '../../components/Task';

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

const tasksMock = [
  {
    key: 1,
    title: 'teste',
    description: 'teste',
    createdAt: 'xx/xx/xxxx',
  },
  {
    key: 2,
    title: 'teste',
    description: 'teste',
    createdAt: 'xx/xx/xxxx',
  },
  {
    key: 3,
    title: 'teste',
    description: 'teste',
    createdAt: 'xx/xx/xxxx',
  },
];

function App() {
  const [tasks, setTasks] = useState(tasksMock);

  const handlerTasks = (key: number) => {
    const tasksUpdated = tasks.filter((task) => task.key !== key);
    setTasks(tasksUpdated);
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
      key: tasks.reduce((prev, curr) => (curr.key < prev ? prev : curr.key), 0) + 1,
      title: title,
      description: description,
      createdAt: new Date().toLocaleString('pt-br'),
    };
    setTasks([...tasks, task]);
  };

  return (
    <AppContainer id="app">
      <TasksGrid>
        {tasks.map((info) => (
          <Task key={info.key} taskInfo={info} handlerTasks={handlerTasks} />
        ))}
      </TasksGrid>

      <ButtonArea>
        <Button text="Nova Tarefa" onClick={handlerAddNewTask} />
      </ButtonArea>
    </AppContainer>
  );
}

export default App;
