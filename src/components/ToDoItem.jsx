import "../styles/task.css";

function ToDoItem({ todo, onToggle, onDelete }) {
  //Component qui reçoit todo (qui correspond à la tache du .map et non au tableau complet), et la fonction onToggle qui a besoin elle meme d'un id en parametre
  return (
    <div className="tasktext">
      <div className="task">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggle(todo.id)}
        />
        {/*La checkbox est cochée si isCompleted est true */}
        {/*Au changement, la fonction onToggle est appelée avec l'id de la atche actuelle en paramètre*/}
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          {/*Si la tache à isCompleted true alors elle est barrée avec textDecoration */}
          {todo.text}
          {/*Affiche le todo.text donc la valeur de la clé text dans l'objet t du tableau todo */}
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)}>X</button>
      {/*Lors du clic, on donne à la fonction onDelete l'id de la tache (pour rappel dans ce component todo est égal à une tache et pas le tableau) */}
    </div>
  );
}

export default ToDoItem;
