const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.use((req, res, next) => {
    console.log('Request made');
    console.log('hostname: ' + req.hostname);
    console.log('path: ' + req.path); 
    next();
});

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

app.get('/item/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(3000);