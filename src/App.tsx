import "./App.css";
import { Box, formGroupClasses } from "@mui/material";
import TaskItem from "./TaskItem.tsx";
import Header from "./Header";
import CircleAddButton from "./AddButton";
import StarExample from "./priority-star.tsx";

function App() {
  return (
    <Box position={"relative"} height={"90vh"}>
      <Header />
      <CircleAddButton />
      <TaskItem label="Todo" />
      <div>
        <h1></h1>
        <StarExample />
      </div>
    </Box>
  );
}
export default App;
