console.log("Hello");
const form = document.getElementsByTagName("form")[0];

const input = document.querySelector("input[type=text]");

const output = document.getElementById("task-list");
console.log(output);

/* Step 4: 3.Creation of a Add Task function */
function addTask(e) {

  // Don't refresh the page!
  e.preventDefault();
  const taskValue = form[0].value;

  if(taskValue === ""){
    return null;
  } else {
    console.log(taskValue);

    output.innerHTML += `<li>
    <p>${taskValue}</p>
    <div>
      <button class="done"></button>
      <button class="delete">
        Delete
      </button>
    </div>
  </li>`;

  // Before adding a new task in the input we must remove the old one
  form[0].value = '';

  }
}

// function delete task
function deleteTask(event) {
  // event.target est la cible de l'évènement (dans ce cas-ci un click) son résultat dépendra du bouton sur lequel l'utlisateur aura cliqué. Dans notre cas ce sera Done soit Delete.
  const btnClicked = event.target;
  console.log(btnClicked);
  // if (condition) {
    
  // } else {
    
  // }
  
}


// Event on the FORM
form.addEventListener("submit", addTask);
output.addEventListener("click", deleteTask);

/* ----- */

/**
 *  stages of the project :
 * 
 * Faire apparaitre la ligne de tâche avec les boutons associés Done & Delete.
Une fois l'événement Done effectué, donner la possibilité d'annuler Undo.
Une tâche terminée doit être visible mais doit changer de style.
Le nommage de chacune de vos variables et functions doit être clair.
Vous veillerez à limiter le nombre de caratères possibles.
Enregistrer toutes les tâches dans votre navigateur !
 */
// some informations credited by:
/* https://fr.moonbooks.org/Articles/Comment-ajouter-un-nouveau-li-a-ul-en-utilisant-javascript-/#:~:text=Ajouter%20li%20%C3%A0%20ul%20en%20utilisant%20javascript%20Pour,text%20%3D%20document.createTextNode%20%28%27item%204%20%28added%20using%20javascript%29%27%29%3B */

/* choose to add ok button DONE */
let recherche = output.getElementsByClassName("button[class=done]");
console.log(recherche);

// target sur le bouton done

/* revoir à partir d'ici */
for (let index = 0; index < recherche.length; index++) {
    const element = recherche[index];
    console.log(element);


    
/*
    recherche[index] = addEventListener("click", () => {
        element.removeAttribute("done");
        element.focus();
        element.innerText = "Undo";
        console.log("élément CLICKÉ");

    });
*/


    
}

