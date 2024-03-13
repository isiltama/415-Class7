console.log('we have js!');

// server.js

const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');

const app = express();

// Set up Nunjucks environment
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Function to get a random file from a directory
function getRandomFileFromDirectory(directory) {
    const files = fs.readdirSync(directory);
    const randomFile = files[Math.floor(Math.random() * files.length)];
    return randomFile;
}

// Serve static files from moviePosters and tvShows directories
app.use('/moviePosters', express.static(path.join(__dirname, 'moviePosters')));
app.use('/tvShows', express.static(path.join(__dirname, 'tvShows')));

// Route to render the home page
app.get('/', (req, res) => {
    const movieImagePath = getRandomFileFromDirectory(path.join(__dirname, 'moviePosters'));
    const tvShowImagePath = getRandomFileFromDirectory(path.join(__dirname, 'tvShows'));
    res.render('index.njk', { movieImagePath, tvShowImagePath });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
