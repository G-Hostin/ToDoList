import { useState } from "react";
import "./styles/App.css";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  };

  return (
    <div>
      <h1>Ouais la team</h1>
      <ToDoForm onAdd={addTodo} />
    </div>
  );
}

export default App;
