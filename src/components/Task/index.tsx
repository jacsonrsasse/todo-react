import { faCheck, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ITask from '../../utils/taks';
import { Button } from '../Button';
import { ButtonArea } from '../ButtonArea';
import { TaskInfo } from '../TaskInfo';

interface TaskProps {
    handleUpdateTask: (key: number, isChecked: boolean) => void;
    handleDeleteTask: (key: number) => void;
    taskInfo: ITask;
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
    const isChecked = !updatedAt;
    const iconColor = isChecked ? '#01c501' : '#d6b703';
    const iconCheckBtn = isChecked ? faCheck : faXmark;

    return (
        <TaskDesign id={`${key}`}>
            <TaskInfo key={key} title={title} description={description} createdAt={createdAt} updatedAt={updatedAt} />
            <ButtonArea flexDirection="column">
                <Button
                    icon={iconCheckBtn}
                    iconColor={iconColor}
                    rounded
                    onClick={() => props.handleUpdateTask(key, isChecked)}
                ></Button>
                <Button icon={faTrashCan} iconColor="red" rounded onClick={() => props.handleDeleteTask(key)}></Button>
            </ButtonArea>
        </TaskDesign>
    );
}
