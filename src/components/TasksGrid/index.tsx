import styled from 'styled-components';

export const TasksGrid = styled.div`
    background-color: ${(props) => props.theme.background};
    overflow: auto;
    gap: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
`;
