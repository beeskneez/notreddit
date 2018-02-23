const db = require('../db.js');
const model = require('../models/user.js');

// TODO: create model for these to do something with
exports.getAllUsers = (req, res) => {

};

exports.createUser = (req, res) => {
  model.User.sync()
    .then(function() {
      return model.User.create({
        id: null,
        username: req.body.username,
        postVoteCache: 0,
        commentVoteCache: 0
      })
    })
    .then(function(user) {
      res.status(200).send(user);
    })
};