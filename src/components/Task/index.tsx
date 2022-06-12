import React, { useState } from 'react';
import { faCheck, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Button } from '../Button';
import { ButtonArea } from '../ButtonArea';
import { TaskInfo, TaskInfoProps } from '../TaskInfo';

interface TaskProps {
  handlerDeleteTask: (key: number) => void;
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
  const { key, title, description, createdAt } = props.taskInfo;
  const [updatedAt, setUpdatedAt] = useState(props.taskInfo.updatedAt);
  const [isChecked, setIsChecked] = useState(false);
  const [iconCheck, setIconCheck] = useState(faCheck);
  const [iconColor, setIconColor] = useState('#01c501');

  const handleClickCheckButton = () => {
    const btnIcon = isChecked ? faCheck : faXmark;
    const iconColor = isChecked ? '#01c501' : '#d6b703';
    const updatedAtInfo = updatedAt ? '' : new Date().toLocaleString('pt-br');
    setIsChecked(!isChecked);
    setIconCheck(btnIcon);
    setIconColor(iconColor);
    setUpdatedAt(updatedAtInfo);
  };

  const handleClickDeleteButton = () => {
    if (key) {
      props.handlerDeleteTask(key);
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
