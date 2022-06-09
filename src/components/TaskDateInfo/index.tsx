import styled from "styled-components";

interface TaskDataInfoProps {
    text: string;
}

const TaskDateInfoDesign = styled.span`
    font-family: inherit;
    font-size: 0.75rem;
    font-style: italic;
`;

export function TaskDateInfo({ text }: TaskDataInfoProps) {
    return <TaskDateInfoDesign>{text}</TaskDateInfoDesign>;
}
