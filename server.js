//Application Dependencies and Variables
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

//Routes for server access
var routes = require('./routes');



//Syncing models with db
// var db = require("./models")

//For Express to parse JSON 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static( "public"));




//Routes for server access
app.use(routes);

//Set up orm and initialize express
// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });