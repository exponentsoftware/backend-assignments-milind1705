
module.exports = (Sequelize, sequelize) => {
    const Todo = sequelize.define("Todo", {
        todoId: {
            type: Sequelize.INTEGER
        },
        
        title: {
            type: Sequelize.STRING,
            Required: true
        },
        category: {
            type: Sequelize.STRING
        },
        completedOrNot:{
            type:Boolean,
            default: false
        }
        

    });
    return Todo;
}