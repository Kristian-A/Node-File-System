const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {dbname, username, password} = require('./db-connection.js');
const File = require('./models/file.js');

const dbURI = `mongodb+srv://${username}:${password}@nodefilesystem.tp1w8.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(dbURI)
    .then(result => {
        console.log('Successfuly connected to database')
        app.listen(3000);
    })
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const items = [
        {title: 'first', value: 'wow'},
        {title: 'second', value: 'this'},
        {title: 'third', value: 'works'},
    ];

    res.render('index', {title: 'Home', items});    
});

app.get('/about', (req, res) => {
    res.render('about');    
});

app.get('/file/create', (req, res) => {
    res.render('create');
});

app.get('/file/upload', (req, res) => {
    const file = File({
        name: "File1",
        data: "wow"
    });

    file.save()
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

app.get('/files', (req, res) => {
    File.find()
        .then(result => res.send(result))
        .catch(err => console.log(err));
})

app.use((req, res) => {
    res.status(404).send('Page not found!'); 
});
