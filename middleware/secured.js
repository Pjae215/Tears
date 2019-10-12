//Middleware to protect routes
//Create a secured middleware to protect routes and ensure they are only accessible if logged in.
//If the user is not logged in, the requested route will be stored in the session and the user 
//will be redirected to the login page. Upon successful login, the user will be 
//redirected to the previously requested URL (see callback route above).

// lib/middleware/secured.js

module.exports = function () {
    return function secured (req, res, next) {
      if (req.user) { return next(); }
      req.session.returnTo = req.originalUrl;
      res.redirect('/login');
    };
  };