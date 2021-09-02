
module.exports = (Sequelize, sequelize) => {
    const User = sequelize.define("User", {
        userId: {
            type: Sequelize.INTEGER
        },
        
        username: {
            type: Sequelize.STRING,
            Required: true
        },
        email: {
            type: Sequelize.STRING,
            Required: true
        },
        mobile: {
            type: Sequelize.STRING,
            Required: true
        },
        password: {
            type: Sequelize.STRING,
            Required: true
        },
        
        

    });
    return User;
}