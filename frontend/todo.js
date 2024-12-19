document.getElementById('ajout').addEventListener('click', Todo);

function Todo() {
    const tacheListe = document.getElementById('taskList');
    const tache = document.getElementById('tache');

    const tacheTexte = tache.value;

    const li = document.createElement('li');

    //Vérification si le champ de texte est vide
    if (tacheTexte === "") {
        alert("Veuillez entrer une tâche.");
        return;
    }

    //Création du bouton de suppression
    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.classList.add('supprimer');
    boutonSupprimer.addEventListener('click', () => {li.remove();});

    //Création du bouton de modification
    const boutonModifier = document.createElement('button');
    boutonModifier.textContent = "Modifier";
    boutonModifier.classList.add('modifier');
    boutonModifier.addEventListener('click', () => {
        li.childNodes[0].textContent = prompt("Modifier la tâche", li.childNodes[0].textContent);

        if (li.childNodes[0].textContent === "") {
            alert("Veuillez entrer une tâche.");
            li.childNodes[0].textContent = prompt("Modifier la tâche", li.childNodes[0].textContent);
            return;
        };

    });

    //Ajout du texte de la tâche et du bouton de suppression à la tâche
    li.textContent = tacheTexte;
    li.appendChild(boutonModifier);
    li.appendChild(boutonSupprimer);

    //Effacer le champ de texte
    tache.value = "";

    tacheListe.appendChild(li);
};


