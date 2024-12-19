-- Créer la base de données
CREATE DATABASE IF NOT EXISTS DevOps;

-- Utiliser la base de données
USE DevOps;

-- Créer la table tasks
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameTask VARCHAR(255) NOT NULL,
    descriptionTask TEXT
);

-- Insérer les données dans la table tasks
INSERT INTO tasks (nameTask, descriptionTask) 
VALUES 
('Tâche 1', "Conteneuriser cette application à l'aide de Docker"), 
('Tâche 2', "Tester le déploiement des conteneurs"), 
('Tâche 3', "Publier vos images sur DockerHub"), 
('Tâche 4', "Configurer un workflow Github Actions pour automatiser"), 
('Tâche 5', "Présentation de 10min");
