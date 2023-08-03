const app = require("express").Router()//uses app to create new router object for file structure 
let db = require("../db/db.json")//use db folder
const fs=require("fs")//use express file system
// Read data
app.get('/api/notes', (req, res) =>{
  db = JSON.parse(fs.readFileSync("./db/db.json")) || [] // || or  [] empty array
  res.json(db)  
});
// Create - new data
app.post('/api/notes', (req, res) =>{
  let notes = {
    id: Math.floor(Math.random() * 9898),//random extremely high value for input
    title: req.body.title,//input main text
    text: req.body.text//input subtext
  }
  db.push(notes)
  fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
    if(err) throw err
  })
  res.json(db)
});
app.delete('/api/notes/:id', (req, res) =>{
    let array = [];
    for (let i=0; i<db.length; i++) {
        if (db[i].id != req.params.id){
            array.push(db[i])//push out items from array via user choice
        }
    }
    db = array;
    fs.writeFileSync('./db/db.json', JSON.stringify(db),function(err){
      if(err) throw err//end method if error
    })
    res.json(db)//put results to empty array
  });
module.exports = app//export local app for access in separate file