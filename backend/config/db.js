import mysql from 'mysql2';
// import mysql from 'mysql';
import dotenv from 'dotenv';
// import { resolve } from 'path'

// // Charger les variables d'environnement
// dotenv.config({ path: '/Users/fouadlamnaouar/Hetic/TP_DEVOPS/.env'});

// Créer une connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'devops',
});

// Tester la connexion immédiatement après sa création
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.message);
        process.exit(1); // Arrête le processus si la connexion échoue
    } else {
        console.log('Connecté à la base de données MySQL');
    }
});


export default db;
