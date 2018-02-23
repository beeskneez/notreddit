const Sequelize = require('sequelize');
const config = require('../../config.js');
const sequelize = new Sequelize(config.TOKEN);


sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;