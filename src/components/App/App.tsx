import { useState } from "react";
import { TasksGrid } from "../TasksGrid/TasksGrid";
import "./App.css";

function App() {
    return (
        <div id="app">
            <TasksGrid />
            <div></div>
        </div>
    );
}

export default App;
