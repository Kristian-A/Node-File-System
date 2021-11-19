const express = require('express');
const app = express();
const mongoose = require('mongoose');
<<<<<<< HEAD
const Files = require('./models/File.js');
const {dbname, username, password} = require('./db-connection.js');
const { redirect } = require('statuses');
=======
const {dbname, username, password} = require('./db-connection.js');
const File = require('./models/file.js');
>>>>>>> Features

const dbURI = `mongodb+srv://${username}:${password}@nodefilesystem.tp1w8.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(dbURI)
    .then(result => {
        console.log('Successfuly connected to database')
        app.listen(3000);
    })
    .catch(err => console.log(err));

<<<<<<< HEAD
mongoose.connect(dbURI)
    .then(res => {
        console.log('Connected to database');
        app.listen(3000);
    })
    .catch(err => console.log(err));


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    Files.find()
        .then(files => res.render('index', {files}))
=======
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({'extended': true }));

app.get('/', (req, res) => {
    File.find()
        .then(result => res.render('index', {title: 'Home', items: result}))
>>>>>>> Features
        .catch(err => console.log(err));
});

app.post('/', (req, res) => {
    new Files(req.body).save();
    res.redirect('/');
});

<<<<<<< HEAD
app.post('/delete/:id', (req, res) => {
    Files.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
})
=======
app.get('/file/create', (req, res) => {
    res.render('create');
});

app.post('/files', (req, res) => {
    
    let {name, data} = req.body
    
    new File(req.body).save()
        .then(result => console.log('Item added'))
        .catch(err => console.log(err));
    res.redirect('/file/create');
});

app.delete('/files/:id', (req, res) => {
    let id = req.params.id;
    
    File.findByIdAndDelete(id)
        .then(result => res.json({ 'redirect': '/' }))
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.status(404).send('Page not found!'); 
});
>>>>>>> Features
