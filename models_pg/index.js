// //const dbConfig = require('../../db/db.config');
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     pool:{
//         Max: dbConfig.Pool.Max,
//         Min: dbConfig.Pool.Min,
//         acquire: dbConfig.Pool.acquire,
//         idle: dbConfig.Pool.idle
//     }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.todo = require('./todo')(Sequelize, sequelize);
// db.user = require('./userModel')(Sequelize, sequelize);
// module.exports = db;

