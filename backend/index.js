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

// Routes
app.use('/api', taskRoutes);

// le lien de route http://localhost:3000/
app.get('/', (req, res) => {
    res.send('La route marche')
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
