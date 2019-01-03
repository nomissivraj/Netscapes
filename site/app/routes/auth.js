var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    // Index (Home)
    app.get('/', authController.index);

    // Signup
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup'
    }));
    
    //Sign up for the app
    //app.get('/signupapp', authController.signup);
    app.post('/signupapp', passport.authenticate('local-signup', {
        successRedirect: "/success",
        failureRedirect: "/fail"
    }));
    
    app.get('/success', function(req, res){//Code for returning a successful response to the app
        res.send("success");
    })
    
    app.get('/fail', function(req, res){//Code for returning a not so successful response to the app
        res.send("fail");
    })

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