#utilise une image legere de node.js
FROM node:18-alpine

#cree un dossier de travail dans le conteneur
WORKDIR /app

# copie les fichiers necessaires dans le conteneur
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# revenir a la racine du projet
WORKDIR /app
COPY . .

#exposer le port sur lequel votre application
EXPOSE 3000

# demarre l'application
CMD ["node", "backend/index.js"] 

