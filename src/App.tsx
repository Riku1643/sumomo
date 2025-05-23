import "./App.css";
import { Box, Button } from "@mui/material";
import Header from "./Header";
import CircleAddButton from "./AddButton";

function App() {
  return (
    <Box position={"relative"} height={"90vh"}>
      <Header />
      <Button variant="contained">Contained</Button>
      <CircleAddButton />
    </Box>
  );
}

export default App;
