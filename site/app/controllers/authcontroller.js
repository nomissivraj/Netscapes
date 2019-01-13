var exports = module.exports = {}
var models = require('../models');
var mysql = require('mysql');
var defraAirQuality = require('defra-air-quality-js');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
});

exports.index = function(req, res) {
    res.render('index', {
        user: req.user,
        title: 'Home',
        condition: false
    });
}

exports.questions = function(req, res) {
    // Using Sequelize Node Module
    // models.question.findAll().then(function(questions) {
    //     res.render('questions', {
    //         user: req.user,
    //         questions: questions,
    //         title: 'Questions',
    //         condition: false
    //     });
    // });  
    // Using MySQL Node Module
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Questions", function (err, result, fields) {
            if (err) throw err;
            res.render('questions', {
                user: req.user,
                questions: result,
                title: 'Questions',
                condition: false
            });
        });
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

exports.about = function(req, res) {
    res.render('about', {
        user: req.user,
        title: 'About',
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

exports.dashboard = function(req, res) {
    res.render('dashboard', {
        user: req.user
    });
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}