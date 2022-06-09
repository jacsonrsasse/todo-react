import styled, { css } from "styled-components";
import { useState } from "react";
import { TasksGrid } from "../TasksGrid";
import { ButtonArea } from "../ButtonArea";
import { Button } from "../Button";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../Task";
import { TaskDateInfo } from "../TaskDateInfo";

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
            <TasksGrid>
                <Task>
                    <div>
                        <TaskDateInfo text="Teste" />
                    </div>
                    <ButtonArea flexDirection="column">
                        <Button icon={faCheck} rounded></Button>
                        <Button icon={faTrashCan} rounded></Button>
                    </ButtonArea>
                </Task>
            </TasksGrid>

            <ButtonArea>
                <Button text="Nova"></Button>
            </ButtonArea>
        </AppContainer>
    );
}

export default App;
