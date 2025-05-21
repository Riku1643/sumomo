import "./App.css";
import { Button } from "@mui/material";
import TaskItem from "./TaskItem.tsx";

function App() {
  return (
    <>
      <Button variant="contained">Contained</Button>
      <div>
        <TaskItem label="My Task" />
      </div>
    </>
  );
}

export default App;
