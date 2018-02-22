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

  // const Post = sequelize.define('post', {
  //   uid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  //   title: {type: Sequelize.STRING},
  //   body: {type: Sequelize.TEXT},
  // });

// Post.create({
//       uid: null,
//       title: 'Check dis out',
//       body: 'Dis is kewl'
// });

  
  // Post.findAll().then(post => {
  //   console.log(post);
  // })

  // db.sequelize = sequelize;
  // db.Sequelize = Sequelize;

module.exports = sequelize;