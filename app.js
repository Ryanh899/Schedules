const express = require('express'); 
const app = express(); 
const path = require('path'); 
const knex = require('./knex/knex.js');
const exphbs  = require('express-handlebars');
const passportSetup = require('./config/passport-setup'); 
const cookieSession = require('cookie-session'); 
const keys = require('./config/keys')
const passport = require('passport'); 

const PORT = process.env.PORT || 3000; 
//view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//use cookie encoder
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
})); 

//init passport 
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use(express.static(path.join(__dirname + '/views/'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
    

const authRoutes = require('./controller/routes/auth-routes'); 
app.use('/auth', authRoutes); 

const profileRoutes = require('./controller/routes/profile-routes'); 
app.use('/profile', profileRoutes); 




app.listen(PORT, err => {
    if (err) throw err; 
    console.log(`app listening on port ${PORT}`)
})