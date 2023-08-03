const path = require('path');//accesses file and directory paths
const app = require("express").Router()//uses app to create new router object for file structure

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))//sends response to home directory using given path input
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))//sends response to notes directory using given path input
);

module.exports = app//exports local value of app