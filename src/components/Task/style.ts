import styled from 'styled-components';

export const TaskDesign = styled.div`
    max-height: 6rem;
    width: 100%;
    background-color: ${(props) => props.theme.appBackground};
    border-radius: 8px;
    flex: 1 0 6rem;
    display: grid;
    grid-template-columns: 1fr 60px;
`;
