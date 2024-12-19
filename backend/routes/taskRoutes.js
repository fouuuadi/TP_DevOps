import express from 'express';
import db from '../config/db.js';


const router = express.Router(); // Initialisation du router

// le lien de route http://localhost:3000/api/
router.get('/', (req, res) => {
    res.send('Hello depuis taskRoutes !');
});

export default router; // Exporter le router pour l'utiliser dans index.js

// Route pour récupérer toutes les tâches
router.get('/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des tâches :', err.message);
            return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.status(200).json(results);
    });
});


// export default router;
