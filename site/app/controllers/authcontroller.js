var exports = module.exports = {}
var models = require('../models');

exports.index = function(req, res) {
    res.render('index', {
        user: req.user,
        title: 'Home',
        condition: false
    });
}

exports.questions = function(req, res) {
    models.question.findAll().then(function(questions) {
        res.render('questions', {
            user: req.user,
            questions: questions,
            title: 'Questions',
            condition: false
        });
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