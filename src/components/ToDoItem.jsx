function ToDoItem({ todo, onToggle }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
}

export default ToDoItem;
