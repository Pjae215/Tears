//Making the user available in the views
//In the views and layouts, it is often necessary to conditionally render content 
//depending on if a user is logged in or not. Other times, the user object might 
//be necessary in order to customize the view.

//Create a middleware lib/middleware/userInViews.js for this purpose.

// userInViews.js

module.exports = function () {
    return function (req, res, next) {
      res.locals.user = req.user;
      next();
    };
  };