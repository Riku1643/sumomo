import "./App.css";
import { Button } from "@mui/material";
import TaskItem from "./TaskItem.tsx";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <TaskItem label="ToDo" />
      </div>
    </>
  );
}

export default App;
