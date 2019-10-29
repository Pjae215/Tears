// //Dependencies and Variables
// var express = require("express");
// var router = express.Router();
// var MEMber = require("../config/connection.js");

// //Function to loop through all values (or unknown entries) and return as a string
// function ternary(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
// //Converts object to SQL syntax then pushes string to the array
//   function objToSql(ob) {
//     var arr = [];
  
//     for (var key in ob) {
//       var value = ob[key];
    
//       if (Object.hasOwnProperty.call(ob, key)) {
      
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         arr.push(key + "=" + value);
//       }
//     }
  
//   //Translates array of strings to a single comma-separated string
//     return arr.toString();
//   }
  
// // Object for all our SQL statement functions.
// var MEMber = {
//     //For comparison of variables, ie email, user name etc
//     selectAll: function(table, cb) {
//       var queryString = "SELECT * FROM " + table + ";";
  
//       connection.query(queryString, function(err, result) {
//           if (err) {
//               throw err;
//           }
//           cb(result);
//       });
//   },
//   // Add a new member to the db.
//   insertOne: function(table, cols, vals, cb) {
//       var queryString = "INSERT INTO " + table;
//       queryString += " (";
//       queryString += cols.toString();
//       queryString += ") ";
//       queryString += "VALUES (";
//       queryString += ternary(vals.length);
//       queryString += ") ";
  
//       console.log(queryString);
  
//       connection.query(queryString, vals, function(err, result) {
//           if (err) {
//               throw err
//           }
//           cb(result);
//       });
//   },
//   // Update variables like preferences or email etc
//   updateOne: function(table, objColVals, condition, cb) {
//       var queryString = "UPDATE " + table;
//       queryString += " SET ";
//       queryString += objToSql(objColVals);
//       queryString += " WHERE ";
//       queryString += condition;
  
//       console.log(queryString);
  
//       connection.query(queryString, function(err, result) {
//           if (err) {
//               throw err
//           }
//           cb(result);
//       });
//   },
//   //Only profiles are allowed to be deleted
//   deleteOne: function(table, condition, cb) {
//       var queryString = "DELETE FROM " + table;
//       queryString += " WHERE ";
//       queryString += condition;
  
//       console.log(queryString);
  
//       connection.query(queryString, function(err, result) {
//           if (err) {
//               throw err
//           }
//           cb(result);
//       });
//   }
  
//   };
  
  
//   // Export the new member object for the model/MEMber.js file
//   module.exports = MEMber;
  
