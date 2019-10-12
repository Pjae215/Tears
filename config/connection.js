// Dependencies and Variables
var mysql = require("mysql");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//not sure which one to use
// Set up MySQL connection for local access if server cannot access Jawsdb
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{

  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "paula",
    database: "chivalry_db"
  });
}

// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;