import styled from "styled-components";

export const TasksGrid = styled.div`
    background-color: ${(props) => props.theme.corSistemaBase5};
    overflow: auto;
    gap: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
`;
