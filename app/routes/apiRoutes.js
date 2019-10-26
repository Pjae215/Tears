// Requiring 
var db = require("../models");
// require('./auth')




module.exports = function(app) {
//Using the passport.authenticate middleware with our local strategy.
//Validated users returns profile data
    app.post('/SignIn', //passport.authenticate('local'), 
    function(req, res) {
        console.log(req.User);
    res.json(db.Profile); });

//Route for logging user out
    app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    });
        
//Validated new user sends login data to db
    app.post("/api/signup", //passport.authenticate("local"), 
    function(req, res) {
        console.log("signingup");
        db.User.create({
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                birthday: req.body.dob,
                gender: req.body.gender,
                status: req.body.status
            })
        .then(function(data) {
                console.log(req.User);
                db.Prefs.create({
                    email: req.body.email,      //will be key to connect tables
                    kids1: req.body.kids1,      //want to make them choose 2, give option for not important
                    kids2: req.body.kids2,   //want to make them choose 2, give option for not important
                    race1: req.body.race1,   //want to make them choose 2, give option for not important
                    race2: req.body.race2,        //want to make them choose 2, give option for not important
                    agegroup: req.body.agegroup,  //give age ranges and assign a value to each range
                    religion1: req.body.religion   //just creating a functioning db/route for now
                });
                res.json(data);
            })
        .catch(function(err) {
                console.log(err);
                res.status(401).json(err);
            });
    });

//For updating preferences
    app.put("/api/prefs", function(req, res) {
        console.log("change");
        db.Prefs.update(
            req.body,
            {where:{
                email: req.body.email
            }})
        .then(function() {
            console.log(db.email);
            res.json(db.Prefs);
            })
        .catch(function(err) {
            console.log(err);
            res.status(401).json(err);
            });
    });
//Route for getting user profile
app.get("/api/profile", function(req, res) {
    if (req.email) {
        console.log("Getting" + req.email)
        db.User.findOne({
            where: { email: req.params.email }
        }).then(function(data) {
        console.log(data)
            res.json(data)
        })
    } else {
        console.log("invalid email")
        res.end()
    }
})

//Route for deleting a profile
    app.delete("/api/profile", function(req, res) {
        console.log("nooo");
        db.Profile.destroy({
            where: { email: req.params.email }
        }).then(function(data) {
            console.log()
            res.json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(401).json(err);
        });
    });
};
// //To create and store likes....we store likes but we only show matches
//     app.post("/api/likes", function(req, res) {
//         db.Likes.create({
//            //need to tell user a that user b liked them and user c too
//         });
//             res.json(res)
//         });

// //To show matches
//     app.post("/api/matches", function(req, res) {
//        db.Likes.findAll({
//              where: { email 1 equals email 2 }
//         }).then(function(data) {
//             console.log("help")
//             res.json(data);
//         })
//     })
// };


//To create and store messages
//To retrive and show matches
//To create and store violations
//To create and store successes
//To retrieve and show violations
//To retrieve and show successes