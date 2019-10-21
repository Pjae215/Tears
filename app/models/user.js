module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },

        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dob: {
            type: Sequelize.DATE,
            validate: {
                isDATE: true
            }
        }
 
 
    });
 
    return User;
 
}
