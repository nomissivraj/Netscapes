var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    // Index (Home)
    app.get('/', authController.index);

    // Questions (DB Test)
    app.get('/questions', authController.questions);
    
    // Air Quality (Test)
    app.get('/airquality', authController.airquality);

    // Signup
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));
    
    //Sign up for the app
    //app.get('/signupapp', authController.signup);
    app.post('/signupapp', passport.authenticate('local-signup', {
        successRedirect: '/success',
        failureRedirect: '/fail',
        failureFlash: true // allow flash messages
    }));
    
    app.get('/success', function(req, res){//Code for returning a successful response to the app
        console.log(req.query.id)
        res.send("success/" + req.query.id);
    })
    
    app.get('/fail', function(req, res){//Code for returning a not so successful response to the app
        res.send("fail/" + req.flash('signinMessage') + req.flash('signupMessage'));
    })

    // Signin
    app.get('/signin', authController.signin);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true // allow flash messages
    }));
    
    //Signin for the app
    //app.get('/signupapp', authController.signup);
    app.post('/signinapp', passport.authenticate('local-signin', {
        successRedirect: '/success',
        failureRedirect: '/fail',
        failureFlash: true // allow flash messages
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