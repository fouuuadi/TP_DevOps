const taskForm = document.getElementById('taskForm');
const taskTableBody = document.getElementById('taskTableBody');

// Fonction pour récupérer et afficher les tâches
async function fetchTasks() {
    try {
        const response = await fetch('/api/displayTasks');
        const tasks = await response.json();

        // Vider le tableau avant d'insérer les tâches
        taskTableBody.innerHTML = '';
        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.id}</td>
                <td>${task.nameTask}</td>
                <td>${task.descriptionTask}</td>
            `;
            taskTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des tâches :', error);
    }
}

// Fonction pour ajouter une nouvelle tâche
taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameTask = document.getElementById('nameTask').value;
    const descriptionTask = document.getElementById('descriptionTask').value;

    try {
        const response = await fetch('/api/addTasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nameTask, descriptionTask }),
        });

        if (response.ok) {
            alert('Tâche ajoutée avec succès');
            taskForm.reset();
            fetchTasks(); // Rafraîchir la liste des tâches
        } else {
            const error = await response.json();
            alert(`Erreur : ${error.message}`);
        }
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
    }
});

// Charger les tâches au démarrage
fetchTasks();
