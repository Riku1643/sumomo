import "./App.css";
import { Box, Button } from "@mui/material";
import TaskItem from "./TaskItem.tsx";
import Header from "./Header";
import CircleAddButton from "./AddButton";

function App() {
  return (
    <Box position={"relative"} height={"90vh"}>
      <Header />
      <CircleAddButton />
      <TaskItem label="Todo" />
    </Box>
  );
}

export default App;
