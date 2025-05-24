import "./App.css";
import { Box, Button } from "@mui/material";
import TaskItem from "./TaskItem.tsx";
import Header from "./Header";
import CircleAddButton from "./AddButton";
import { useState } from "react";
import SModal from "./plus-modal.tsx";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box position={"relative"} height={"90vh"}>
      <Header />
      <CircleAddButton onClick={handleOpen} />
      <TaskItem label="Todo" />
      <SModal open={open} onClose={handleClose} />
    </Box>
  );
}

export default App;
