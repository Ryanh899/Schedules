const router = require('express').Router();
const passport = require('passport');

// auth login 
router.get('/login', (req, res) => {
    // res.render('login');
    res.redirect('/login.html')
});

//auth log out 
router.get('/logout', (req, res) => {
    //handle with passport 
    res.send('logged out')
}); 


//google auth 
router.get('/google', passport.authenticate('google', {
        scope: ['profile'],
        failureRedirect: '/'
    })
);

//google auth redirect 
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile.html')
}); 

module.exports = router;