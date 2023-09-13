const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
      //res.send("Strona Dojebana!")
      res.render('index',{});
});

app.get('/omnie', (req, res) => {
    res.send("Strona o mnie")
});

app.get('/kontakt', (req, res) => {
    res.send("Strona kontakt")
});

app.listen(5000, () => {
     console.log("serwer Działa!")
});