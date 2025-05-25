function ToDoFilters({ onFilterChange, deleteAllCompleted }) {
  return (
    <div>
      <button onClick={() => onFilterChange("all")}>Toutes</button>
      {/*Au clic, la fonction handleFilterChange recoit all en parametre*/}
      <button onClick={() => onFilterChange("active")}>À faire</button>
      {/*Au clic, la fonction handleFilterChange recoit active en parametre*/}
      <button onClick={() => onFilterChange("completed")}>Terminées</button>
      {/*Au clic, la fonction handleFilterChange recoit completed en parametre*/}
      <button onClick={() => deleteAllCompleted()}>Supprimer</button>
      {/*Au clic, la fonction handleFilterChange recoit completed en parametre*/}
    </div>
  );
}
export default ToDoFilters;
