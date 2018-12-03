var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    // Index (Home)
    app.get('/', authController.index);

    // Signup
    // app.get('/signup', authController.signup);
    // app.post('/signup', passport.authenticate('local-signup', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/signup'
    // }));

    // Signin
    app.get('/signin', authController.signin);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash : true // allow flash messages,
    }));

    // About
    app.get('/about', authController.about);
    
    // Dashboard
    // app.get('/dashboard', isLoggedIn, authController.dashboard);
    
    // Logout
    app.get('/logout', authController.logout);

    // Middleware
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}