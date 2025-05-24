import { useState } from "react";
import "./styles/App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import ToDoFilters from "./components/ToDoFilters";

function App() {
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  };

  const filteredTodos = todo.filter((t) => {
    if (filter === "completed") return t.isCompleted;
    if (filter === "active") return !t.isCompleted;
    return true;
  });

  return (
    <div>
      <h1>ToDo List :</h1>
      <ToDoForm onAdd={addTodo} />
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <ToDoItem todo={todo.text} />
          </li>
        );
      })}
      <ToDoFilters onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
