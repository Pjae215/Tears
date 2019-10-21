var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').config()
var exphbs = require('express-handlebars')
var mysql = require("mysql");

 
 
//For BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true })); 

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
//For HTML
app.use(express.static( "public"));
// app.get('/', function(req, res) {
//   res.send('index');
//   });


//Models
var models = require("./app/models");
 
//Routes

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);
// require('./app/routes/auth.js')(app,passport);
 
 
//load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
 
 
