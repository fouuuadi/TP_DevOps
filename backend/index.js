import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';


// Charger les variables d'environnement
dotenv.config();

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// le lien de route http://localhost:3000/
// app.get('/', (req, res) => {
//     res.send('La route marche')
// });

app.get('/', (req, res) => {
    const query = 'SELECT * FROM tasks';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des tâches :', err.message);
            res.status(500).send('Erreur lors de la récupération des données.');
            return;
        }

        // Affiche les données dans la réponse
        res.send(`
            <h1>Liste des Tâches</h1>
            <ul>
                ${results.map(task => `<li><strong>${task.nameTask}</strong>: ${task.descriptionTask}</li>`).join('')}
            </ul>
        `);
    });
});


// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
