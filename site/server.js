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

app.listen(webPort, () => {
    console.log(`App Listening on Port: ${webPort}`); 
 });