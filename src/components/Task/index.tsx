import { faCheck, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import ITask from '../../utils/taks';
import { RoundedButton } from '../RoundedButton';
import { ButtonArea } from '../ButtonArea';
import { TaskInfo } from '../TaskInfo';
import { TaskDesign } from './style';

interface TaskProps {
    handleUpdateTask: (key: number, isChecked: boolean) => void;
    handleDeleteTask: (key: number) => void;
    taskInfo: ITask;
}

export function Task(props: TaskProps) {
    const { key, title, description, createdAt, updatedAt } = props.taskInfo;
    const isChecked = !updatedAt;
    const iconColor = isChecked ? '#088f08' : '#a78f07';
    const iconCheckBtn = isChecked ? faCheck : faXmark;

    return (
        <TaskDesign id={`${key}`}>
            <TaskInfo key={key} title={title} description={description} createdAt={createdAt} updatedAt={updatedAt} />
            <ButtonArea flexDirection="column">
                <RoundedButton
                    icon={iconCheckBtn}
                    iconColor={iconColor}
                    onClick={() => props.handleUpdateTask(key, isChecked)}
                ></RoundedButton>
                <RoundedButton
                    icon={faTrashCan}
                    iconColor="#e71c1c"
                    onClick={() => props.handleDeleteTask(key)}
                ></RoundedButton>
            </ButtonArea>
        </TaskDesign>
    );
}
