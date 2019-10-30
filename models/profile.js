// module.exports = function(sequelize, Sequelize) {
 
//     var Profile = sequelize.define('Profile', {
 
//         email: {
//             type: Sequelize.STRING,
//             primaryKey: true,
//             validate: {
//                 isEmail: true
//                 }}
//     });

//     Profile.associate = function(models) {
// //no profile can exist without a user
//             Profile.hasOne(models.User, {
//               foreignkey: {
//                   allnowNull: false}
//             });
// //no profile can exist without preference since those are apart of the signup process..might be reaching here
//             // Profile.hasOne(models.Prefs, {
//             //     foreignkey: {
//             //     allnowNull: false}
//             //   });
//           };
//     return Profile
// }