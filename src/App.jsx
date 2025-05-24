import { useState } from "react";
import "./styles/App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";

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
      <h1>ToDo List :</h1>
      <ToDoForm onAdd={addTodo} />
      {todo.map((todo) => {
        return (
          <li key={todo.id}>
            <ToDoItem todo={todo.text} />
          </li>
        );
      })}
    </div>
  );
}

export default App;
