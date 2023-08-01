const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log('Server started on port 3001');
});