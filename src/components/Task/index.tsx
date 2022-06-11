import React from 'react';
import { faCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button } from '../Button';
import { ButtonArea } from '../ButtonArea';
import { TaskInfo, TaskInfoProps } from '../TaskInfo';

interface TaskProps {
  taskInfo: TaskInfoProps;
}

const TaskDesign = styled.div`
  max-height: 6rem;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  flex: 1 0 6rem;
  display: grid;
  grid-template-columns: 1fr 60px;
`;

export function Task(props: TaskProps) {
  const { title, description, createdAt, updatedAt } = props.taskInfo;
  return (
    <TaskDesign>
      <TaskInfo title={title} description={description} createdAt={createdAt} updatedAt={updatedAt} />
      <ButtonArea flexDirection="column">
        <Button icon={faCheck} iconColor="#01c501" rounded></Button>
        <Button icon={faTrashCan} iconColor="red" rounded></Button>
      </ButtonArea>
    </TaskDesign>
  );
}
