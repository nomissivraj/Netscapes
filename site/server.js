//Node server dependencies for routing etc
const express = require('express');
const app = express();
const http = require('http').Server(app);
const webPort = 3000;

//Front-End dependencies Handlebars etc.
const path = require('path');
const hbs = require('express-handlebars');// Require handlebars
app.engine('hbs', hbs({ //Register engine and set configuration - add Helpers here if required
    extname: 'hbs',
    defaultLayout: 'layout.hbs',
    layoutsDir: __dirname + '/views/layout/'
})); 
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));//Set this folder for public/client-side resources: images, css, js/scripts etc...

//Set port to listen on and run site through
app.listen(webPort, () => {
    console.log(`Site running on Port: ${webPort}`); 
 });

 //Set up routes for Front-End

//Homepage/index
 app.get('/', (req, res) => {
     // Set which content to render to the view (through layout) also set page variables/data within the render second parameter
    res.render('index', {title: 'Homepage', condition: false});
 });

 //About page
 app.get('/about', (req, res) => {
    res.render('about', {title: 'About', condition: false});
 });

