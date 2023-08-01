const app = require("express").Router()
let db = require("../db/db.json")
const fs=require("fs")
// Read data
app.get('/api/notes', (req, res) =>{
  db = JSON.parse(fs.readFileSync("./db/db.json")) || [] // || or  [] empty array
  res.json(db)  
});
// Create - new data
app.post('/api/notes', (req, res) =>{
  let notes = {
    id: Math.floor(Math.random() * 9898),
    title: req.body.title,
    text: req.body.text
  }
  db.push(notes)
  fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
    if(err) throw err
  })
  res.json(db)
});

module.exports = app