import { useEffect, useState } from "react";
import "./styles/App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import ToDoFilters from "./components/ToDoFilters";

function App() {
  const [todo, setTodo] = useState([]); // Initialisation d'un tableau vide dans todo
  const [filter, setFilter] = useState("all"); // Initialisation d'un filter = "all"
  const [isInitialized, setIsInitialized] = useState(false); //Etat pour empecher le useState todo d'écraser le localStorage au premier chargement

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos"); //Recupere la string todos
    if (savedTodos) {
      // Si il y a des todos dans le localStorage
      setTodo(JSON.parse(savedTodos)); // On setTodo en transformant en JSON la string todos récupérée avec savedTodos
    }
    setIsInitialized(true); // On peut passer l'etat de setInitialized a true car la première recupération du localStorage a été effectuée
  }, []);

  useEffect(() => {
    if (isInitialized) {
      //Si isInitialized est true
      localStorage.setItem("todos", JSON.stringify(todo)); //Alors on met le tableau todo dans le localStorage avec la clé todos, si on attend pas isInitialized, il va mettre a jour le tableau vide de useState todo
    }
  }, [todo, isInitialized]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // newFilter = "all", "active" ou "completed" selon le bouton sur lequel on clique dans ToDoFilters
  };

  const toggleTodo = (id) => {
    const updatedTodos = todo.map(
      (t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t) //Si l'id de cette tache est égal à l'id reçu dans la focntion ToDoItem => Si ça correspond tu copie la tache avec [...t] mais tu modifie isCompleted par l'inverse de isCompleted, sinon tu renvois la tache comme avant
    );
    setTodo(updatedTodos); // Remplace l'ancien tableau todo par updatedTodos pour prendre en compte les changements
  };

  const addTodo = (text) => {
    //fonction qui recoit le text de ToDoForm en paramètre
    const newTodo = {
      //Dans une const, on stocke un objet qui contient un id (determiné avec la date actuelle), le text en clé et le text en valeur (qui vient du formulaire), l'etat isCompleted initialisé à false
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]); // On étale ensuite les anciennes taches dans un tableau et on y rajoute notre nouvelle donc [{anciennestache1}, {anciennestache2}, {anciennestache3},{newTodo}]
  };

  const filteredTodos = todo.filter((t) => {
    // On filtre le tableau todo, t est égal à chaque tache
    if (filter === "completed") return t.isCompleted; // Si le filter du useState est égal à completed (determiné par le clic du bouton dans ToDofilters qui passe par la fonction handleFilterChange qui met à jour le state de filter) alors on retourne uniquement un tableau avec les taches qui ont isCompleted à true
    if (filter === "active") return !t.isCompleted;
    return true; // Si filter est égal à autre chose que completed ou active, alors on return true à toute les taches (donc filteredTodos contient les mêmes taches que todo)
  });

  const onDelete = (id) => {
    //La fonction onDelete recoit l'id de la tache grace au bouton de suppression présent dans ToDoItem
    const deletedTodo = todo.filter((t) => {
      //On stocke le tableau qui sort de filter dans deletedTodo
      if (t.id !== id) return true; // La condition pour faire parti du nouveau tableau est d'avoir un id différent de l'id recu en paramètre (celui qu'on doit supprimer)
    });
    setTodo(deletedTodo); //On met à jour le tableau todo avec deletedTodo qui ne contient plus l'élément supprimé
  };

  const deleteCompleted = () => {
    const activeTasks = todo.filter((t) => {
      if (!t.isCompleted) return true;
    });
    setTodo(activeTasks);
  };

  return (
    <div>
      <h1>ToDo List :</h1>
      <ToDoForm onAdd={addTodo} />
      {filteredTodos.length === 0 && <p>Aucune tâche à afficher</p>}
      {filteredTodos.map((todo) => {
        return (
          <li key={todo.id}>
            <ToDoItem todo={todo} onToggle={toggleTodo} onDelete={onDelete} />
          </li>
        );
      })}
      <ToDoFilters
        onFilterChange={handleFilterChange}
        deleteAllCompleted={deleteCompleted}
      />
    </div>
  );
}

export default App;
