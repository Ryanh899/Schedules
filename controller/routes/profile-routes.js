const router = require('express').Router(); 

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login')
    } else {
        next(); 
    }; 
}; 


router.get('/', authCheck, (req, res) => {
    // console.log(JSON.stringify(req.user[0]))
    var temp = req.user
    res.send(temp)
}); 


module.exports = router; 