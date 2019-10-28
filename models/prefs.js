module.exports = function(sequelize, Sequelize) {
 
    var Prefs = sequelize.define('Prefs', {
 
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            validate: {
                isEmail: true
                }}
    });

//     Prefs.associate = function(models) {
// //no profile can exist without a user
//             Prefs.hasOne(models.User, {
//               foreignkey: {
//                   allnowNull: false}
//             });
// //no profile can exist without preference since those are apart of the signup process..might be reaching here
//             Prefs.hasOne(models.Profile, {
//                 foreignkey: {
//                 allnowNull: false}
//               });
//           };
    return Prefs
}