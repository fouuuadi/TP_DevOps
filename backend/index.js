import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import db from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';



const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Charger les variables d'environnement
dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));


// Routes




// le lien de route http://localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/Todo.html'));
});

// Route pour ajouter une tâche
app.post('/addTasks', (req, res) => {
    const { nameTask, descriptionTask } = req.body;
    if (!nameTask || !descriptionTask) {
        return res.status(400).json({ error: 'Les champs sont obligatoires.' });
    }

    const query = 'INSERT INTO tasks (nameTask, descriptionTask) VALUES (?, ?)';
    db.query(query, [nameTask, descriptionTask], (err) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de la tâche :', err.message);
            return res.status(500).json({ error: 'Erreur serveur.' });
        }
        res.status(201).json({ message: 'Tâche ajoutée avec succès.' });
    });
});

// Route pour récupérer les tâches
app.get('/displayTasks', (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des tâches :', err.message);
            return res.status(500).json({ error: 'Erreur serveur.' });
        }
        res.status(200).json(results);
    });
});

// Démarrer le serveur
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Serveur démarré sur http://localhost:${PORT}`);
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

