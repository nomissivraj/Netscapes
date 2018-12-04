var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var flash = require('connect-flash');
var hbs = require('hbs');

// BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Passport
app.use(session({
    secret: 'netscapes',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Flash Messaging
app.use(flash());

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Handlebars helper
hbs.registerHelper('ifEquals', function(a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('toLowerCase', function(str){
    return str.toLowerCase();
});

// Static Files
app.use(express.static('public'));

// Models
var models = require("./app/models");

// Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

// Passport strategies
require('./app/config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize.sync().then(function() {
    console.log('Database OK')

}).catch(function(err) {
    console.log(err, "Database update error")
});

app.listen(port, function(err) {
    if (!err)
        console.log('Listening on: ' + port);
    else console.log(err)
});