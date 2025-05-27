import { useState } from "react";

function ToDoForm({ onAdd }) {
  const [text, setText] = useState(""); // String vide pour le texte de la tâche

  const handleSubmit = (e) => {
    //fonction qui permet de gérer le submit du form
    e.preventDefault(); //empeche le rechargement de la page lors du submit
    if (text.trim() === "") return; //si le texte à des espaces avant/après on les supprime
    onAdd(text); //On donne le texte à onAdd (qui remonte le texte au component parent)
    setText(""); //On vite la valeur du texte pour le prochain que l'on va rentrer
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*On appelle la fonction de gestion du submit*/}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>{" "}
        {/*Formulaire controlé en React = à chaque touche tapée, le text est mis à jour dans useState et la valeur de l'input est égale au text de React, donc le texte affiché sur la page "passe par React" au lieu du comportement basique en HTML, cela permet à React de savoir à tout moment ce que contient son input */}
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ToDoForm;
