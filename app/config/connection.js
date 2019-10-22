// Dependencies and Variables
var mysql = require("mysql");
var express = require('express')
var PORT = process.env.PORT || 3000;
var app = express()
var models = require('../models')

//Set up MySQL connection for local access if server cannot access Jawsdb
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "paula",
    database: "chivalry"
  });
}

// Establishing connection
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



 

 
 
