const express = require('express');
const path = require('path');
const morgan = require('morgan');
var exphbs = require('express-handlebars'); const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));
//Config handlebars template engine
var hbs = exphbs.create({ /* config */ });
//Template engine
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route
app.get('/', (req, res) => {
    res.render('home');
})
app.get('/new', (req, res) => {
    res.render('new');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})