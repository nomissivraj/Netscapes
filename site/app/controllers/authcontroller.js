var exports = module.exports = {}
var models = require('../models');
var mysql = require('mysql');
var defraAirQuality = require('defra-air-quality-js');
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');

// config nodemailer - Mailtrap testing
var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "46158a10815a77",
        pass: "f9f8f075f8d76a"
    }
});

// config email HBS template options
var options = {
     viewEngine: {
         extname: '.hbs',
         layoutsDir: 'app/views/email/',
         defaultLayout : 'resultsTemplate',
         partialsDir : 'app/views/partials/'
     },
     viewPath: 'app/views/email/',
     extName: '.hbs'
 };

//attach the plugin to the nodemailer transporter
transporter.use('compile', hbs(options));

exports.index = function(req, res) {
    res.render('index', {
        user: req.user,
        title: 'Home',
        condition: false
    });
}

exports.about = function(req, res) {
    res.render('about', {
        user: req.user,
        title: 'About',
        condition: false
    });
}

exports.visualisations = function(req, res) {
    res.render('visualisations', {
        user: req.user,
        title: 'Visualisations',
        condition: false
    });
}

exports.airquality = function(req, res) {
    results = defraAirQuality.list().then(function(results) {
        res.render('airquality', {
            user: req.user,
            results: results,
            title: 'UK Air Quality',
            condition: false
        });
        // console.log(results);
    });
}

exports.marinelitter = function(req, res) {
    res.render('marinelitter', {
        user: req.user,
        title: 'Marine LitterWatch',
        condition: false
    });
}

exports.signup = function(req, res) {
    res.render('signup', {
        title: 'Sign Up',
        message: req.flash('signupMessage')
    });
}

exports.signin = function(req, res) {
    res.render('signin', {
        title: 'Sign In',
        message: req.flash('signinMessage')
    });
}

exports.sendResults = function(req, res) {
    var email = req.query.email;
    var score = req.query.score;
    var answered = req.query.answered;
    // Results email
    var mail = {
       from: 'mfrench71@googlemail.com',
       to: email,
       subject: 'Your EQ Score',
       // views/email/resultsTemplate.hbs
       template: 'resultsTemplate',
       // pass variables to view
       context: {
           email: email,
           score: score,
           answered: answered
       }
    }
    transporter.sendMail(mail);
    console.log('Sending email ...');
    res.send("success/" + email + "/" + score + "/" + answered);
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}