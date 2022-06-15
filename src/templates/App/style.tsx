import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 80vh;
    max-height: 80vh;
    width: 400px;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 5px 5px 15px;
    display: grid;
    grid-template-rows: 1fr 50px;
    gap: 5px;
    padding: 20px;
    padding-bottom: 5px;
    background-color: ${(props) => props.theme.appBackground};
`;
