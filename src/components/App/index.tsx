import styled from "styled-components";
import { useState } from "react";
import { TasksGrid } from "../TasksGrid";
import { ButtonArea } from "../ButtonArea";

const AppContainer = styled.div`
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
    background-color: ${(props) => props.theme.corSistemaBase9};
`;

function App() {
    return (
        <AppContainer id="app">
            <TasksGrid />
            <ButtonArea />
        </AppContainer>
    );
}

export default App;
