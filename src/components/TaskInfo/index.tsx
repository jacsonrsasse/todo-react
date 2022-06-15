import ITask from '../../utils/taks';
import { TaskInfoDesign } from './style';

export function TaskInfo({ title, description, createdAt, updatedAt }: ITask) {
    return (
        <TaskInfoDesign>
            <h3 className={updatedAt ? 'completed' : ''}>{title}</h3>
            <p>{description}</p>
            <span>{updatedAt ? 'Atualizado em: ' + updatedAt : 'Criado em: ' + createdAt}</span>
        </TaskInfoDesign>
    );
}
