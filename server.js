// Dependencies and constiables

var mysql = require("mysql");
var express = require('express')
var PORT = process.env.PORT || 3001;
var app = express()
var models = require('./app/models');
const proxy = require('http-proxy-middleware');

app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
        app.use(proxy('/otherApi/**', { target: 'http://localhost:5000' }));


//Set up MySQL connection for local access if server cannot access Jawsdb
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "paula",
    database: "chivalry"
  });
}

//Listening for connection
app.listen(PORT, function(err) {
    if (!err)
        console.log("Site is live... Visit localhost:"+ PORT); 
    else console.log(err)
});


//Syncing models to db
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// Export connection for our ORM to use.
module.exports = connection;



 


 
 
// //For BodyParser
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
 
 
// // For Passport
// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true })); 

// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
 
// //For HTML
// app.use(express.static( "public"));
// // app.get('/', function(req, res) {
// //   res.send('index');
// //   });


// //Models
// const models = require("./app/models");
 
// //Routes

// require("./app/routes/apiRoutes")(app);
// require("./app/routes/htmlRoutes")(app);
// // require('./app/routes/auth.js')(app);
// // require('./app/routes/auth.js')(passport);
 
 
// //load passport strategies
// // require('./app/config/passport/passport.js')(passport, models.user);
 
 
// // Establishing connection
// app.listen(PORT, function(err) {
 
//     if (!err)
 
//         console.log("Site is live... Visit localhost:"+ PORT);
         
//     else console.log(err)
 
// });
