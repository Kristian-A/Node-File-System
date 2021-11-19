const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { nextTick } = require('process');
const {dbname, username, password} = require('./db-connection.js');

const dbURI = `mongodb+srv://${username}:${password}@nodefilesystem.tp1w8.mongodb.net/${dbname}?retryWrites=true&w=majority`


mongoose.connect(dbURI)
    .then(res => {
        console.log('Connected to database');
        app.listen(3000);
    })
    .catch(err => console.log(err));


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res, next) => {
    
    res.redirect('/');
})
