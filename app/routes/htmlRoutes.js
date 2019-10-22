require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/passport/isAuthenticated");

module.exports = function(app) {
 
//Routes to Home page
    app.get("/", function(req, res) {
        console.log('going home')
        res.render("index");});

    app.get("/api/logout", function(req, res) {
        console.log('logout')
        res.redirect("index.html");});
    
    

//Routes to profile page
    app.get("/api/signin/profile", function(req, res) {
        console.log("here");
    res.render("profile"); });

    app.get("/api/signup/preferences/profile", function(req, res) {
        console.log("tomato");
    res.render("profile"); });

    app.get("/api/signup/malepreferences/profile", function(req, res) {
        console.log("tomato");
    res.render("profile"); });

//Routes to signup page
    app.get("/api/signup", function(req, res) {
    console.log("child");
    res.render("signup"); });

//Routes to preferences page
    app.get("/api/signup/preferences", function(req, res) {
        console.log("tea");
        res.render("signup/preferences"); });

    app.get("/api/signup/malepreferences", function(req, res) {
        console.log("ok");
        res.render("signup/malepreferences"); });

// Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
        });

   
    
};