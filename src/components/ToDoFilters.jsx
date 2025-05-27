function ToDoFilters({
  onFilterChange,
  deleteAllCompleted,
  numberCompleted,
  numberTasks,
  numberActive,
  activeFilter,
}) {
  return (
    <div>
      <button
        onClick={() => onFilterChange("all")}
        className={activeFilter === "all" ? "active" : ""}
      >
        Toutes ({numberTasks})
      </button>
      {/*Au clic, la fonction handleFilterChange recoit all en parametre*/}
      <button
        onClick={() => onFilterChange("active")}
        className={activeFilter === "active" ? "active" : ""}
      >
        À faire ({numberActive})
      </button>
      {/*Au clic, la fonction handleFilterChange recoit active en parametre*/}
      <button
        onClick={() => onFilterChange("completed")}
        className={activeFilter === "completed" ? "active" : ""}
      >
        Terminées ({numberCompleted})
      </button>
      {/*Au clic, la fonction handleFilterChange recoit completed en parametre*/}
      <button onClick={() => deleteAllCompleted()}>Supprimer</button>
      {/*Au clic, la fonction handleFilterChange recoit completed en parametre*/}
    </div>
  );
}
export default ToDoFilters;
