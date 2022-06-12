import React, { useState } from 'react';
import { faCheck, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button } from '../Button';
import { ButtonArea } from '../ButtonArea';
import { TaskInfo, TaskInfoProps } from '../TaskInfo';

interface TaskProps {
  handlerTasks: (key: number) => void;
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
  const { key, title, description, createdAt, updatedAt } = props.taskInfo;
  const [isChecked, setIsChecked] = useState(false);
  const [iconCheck, setIconCheck] = useState(faCheck);
  const [iconColor, setIconColor] = useState('#01c501');

  const handleClickCheckButton = () => {
    const btnIcon = isChecked ? faCheck : faXmark;
    const iconColor = isChecked ? '#01c501' : '#d6b703';
    setIsChecked(!isChecked);
    setIconCheck(btnIcon);
    setIconColor(iconColor);
  };

  const handleClickDeleteButton = () => {
    if (key) {
      props.handlerTasks(key);
    }
  };

  return (
    <TaskDesign id={`${key}`}>
      <TaskInfo title={title} description={description} createdAt={createdAt} updatedAt={updatedAt} />
      <ButtonArea flexDirection="column">
        <Button icon={iconCheck} iconColor={iconColor} rounded onClick={handleClickCheckButton}></Button>
        <Button icon={faTrashCan} iconColor="red" rounded onClick={handleClickDeleteButton}></Button>
      </ButtonArea>
    </TaskDesign>
  );
}
