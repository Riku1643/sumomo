import "./App.css";

import TaskItem from "./TaskItem.tsx";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <TaskItem label="Todo" />
      </div>
    </>
  );
}

export default App;
