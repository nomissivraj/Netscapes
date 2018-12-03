var exports = module.exports = {}

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

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin', {
        title: 'Sign In'
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