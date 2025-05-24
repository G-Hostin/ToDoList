function ToDoFilters({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("all")}>Toutes</button>
      <button onClick={() => onFilterChange("active")}>À faire</button>
      <button onClick={() => onFilterChange("completed")}>Terminées</button>
    </div>
  );
}
export default ToDoFilters;
