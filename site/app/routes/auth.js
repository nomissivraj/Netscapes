var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    // Index (Home)
    app.get('/', authController.index);

    // Signup
    app.get('/signup', authController.signup);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));
    
    //Sign up for the app
    //app.get('/signupapp', authController.signup);
    app.post('/signupapp', passport.authenticate('local-signup'), function(req,res){
        res.redirect("/success/?id=" + req.user.id);
        //failureRedirect: "/fail"
    }, function(req, res){
        res.redirect("/fail")
    });
    
    app.get('/success', function(req, res){//Code for returning a successful response to the app
        console.log(req.query.id)
        res.send("success/" + req.query.id);
    })
    
    app.get('/fail', function(req, res){//Code for returning a not so successful response to the app
        res.send("fail");
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
    app.post('/signinapp', passport.authenticate('local-signin'), function(req,res){
        res.redirect("/success/?id=" + req.user.id);
        //failureRedirect: "/fail"
    }, function(req, res){
        res.redirect("/fail")
    });

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