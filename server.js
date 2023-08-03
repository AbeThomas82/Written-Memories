const express = require('express');//Bring in ExpressJS


const app = express();//place const value for calling express
const PORT = process.env.PORT ||  3001;//depicts state of system environment

app.use(express.urlencoded({extended:true}))//middleware for using URL to parse requests
app.use(express.json())//grabs json data
app.use(express.static('public'));//accesses public folder
app.use(require("./routes/apiroutes"))//accesses apiroutes.js
app.use(require("./routes/htmlroutes"))//accesses htmlroutes.js
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)//logs port 3001 for project
);