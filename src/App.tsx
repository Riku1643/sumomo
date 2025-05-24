import "./App.css";
import { Box } from "@mui/material";
import TaskItem from "./TaskItem.tsx";
import Header from "./Header";
import CircleAddButton from "./AddButton";
import { useState } from "react";
import SModal from "./plus-modal.tsx";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const handleAddTask = (text: string) => {
    setTasks([...tasks, text]);
    handleClose();
  };
  return (
    <Box position={"relative"} height={"90vh"}>
      <Header />
      <CircleAddButton onClick={handleOpen} />
      {tasks.map((task, index) => (
        <TaskItem key={index} label={task} />
      ))}
      <SModal open={open} onClose={handleClose} onAdd={handleAddTask} />
    </Box>
  );
}

export default App;
