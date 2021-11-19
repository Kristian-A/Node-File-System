const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Files = require('./models/file.js');
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
    Files.find()
        .then(files => res.render('index', {files}))
        .catch(err => console.log(err));
});

app.post('/', (req, res) => {
    new Files(req.body).save();
    res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
    Files.findByIdAndDelete(req.params.id)
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
})
