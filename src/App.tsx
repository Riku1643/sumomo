import "./App.css";
import { Button } from "@mui/material";
import TaskItem from "./TaskItem.tsx";

function App() {
  return (
    <>
      <div>
        <TaskItem label="ToDo" />
      </div>
    </>
  );
}

export default App;
