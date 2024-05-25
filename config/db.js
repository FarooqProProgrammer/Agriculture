const Sequelize = require("sequelize");


const sequelize = new Sequelize("agriculture", "root", "", {
   host: "localhost",
   dialect: "mysql",
});


module.exports = sequelize;
