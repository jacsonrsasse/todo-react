import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { TasksGrid } from "../TasksGrid/TasksGrid";
import { ButtonArea } from "../ButtonArea";

function App() {
    return (
        <div id="app">
            <TasksGrid />
            <ButtonArea />
        </div>
    );
}

export default App;
