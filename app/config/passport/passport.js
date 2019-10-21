//load bcrypt
var bCrypt = require('bcrypt-nodejs');


module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

//Defining passport's local strategy
//LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({

 //Using input from member       
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback

        },
//encrypting password
        function (req, email, password, done) {

            var generateHash = function (password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

//Searching chivalry user table to find if email/user exists
            User.findOne({
                where: {email: email }
            }).then(function (user) {

                if (user) {
                return done(null, false, {
                        message: 'That email is already taken'});

                } else {
//If email/user does not exist then we obtain data we want to serialize
                        var userPassword = generateHash(password);
                        var data = {
                        email: email,
                        password: userPassword,
                        username: req.body.username };
//We use data to let passport know this is a new user
                            User.create(data).then(function (newUser, created) {
                                if (!newUser) {
                                return done(null, false);}
                                
                                
                                if (newUser) {return done(null, newUser);}});
                        }
            });

        }));


//serializing session
    passport.serializeUser(function (user, done) {

        done(null, user.email);});
    
//Deserializing session 
    passport.deserializeUser(function (email, done) {

        User.findByemail(email).then(function (user) {

            if (user) {
            done(null, user.get());} 
            
            else { done(user.errors, null);
            }});});

    
//LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
        },


        function (req, email, password, done) {

            var User = user;
            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);}

            User.findOne({
                where: {
                    email: email}
            }).then(function (user) {

                if (!user) {
                    return done(null, false, {
                    message: 'Email does not exist'
                    });}

                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                    message: 'Incorrect password.'
                    });}


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {
                console.log("Error:", err);

                return done(null, false, {
                message: 'Something went wrong with your Signin'
                });});


        }));

};
