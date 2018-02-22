const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://kmlhnjsx:ESC8nAu__LqKRBoKDb0tIBboj1xIvczx@hanno.db.elephantsql.com:5432/kmlhnjsx');


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

exports.config =  {
  db: sequelize
};