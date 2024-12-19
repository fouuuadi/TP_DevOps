import mysql from 'mysql2';
// import mysql from 'mysql';
import dotenv from 'dotenv';
import { resolve } from 'path'

// Charger les variables d'environnement
dotenv.config({ path: '/Users/fouadlamnaouar/Hetic/TP_DEVOPS/.env'});

// Créer une connexion MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connecter à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.message);
    }
    console.log('Connecté à la base de données MySQL');
});

console.log('Configuration MySQL :', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default db;
