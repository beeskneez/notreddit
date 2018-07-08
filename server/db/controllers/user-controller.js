const db = require('../db.js');
const model = require('../models/user.js');

exports.getAllUsers = (req, res) => {};

exports.createUser = (req, res) => {
  model.User.sync()
    .then(() =>
      model.User.create({
        id: null,
        username: req.body.username,
        email: req.body.email,
        postVoteCache: 0,
        commentVoteCache: 0,
        subredditSubscriptions: ''
      })
    )
    .then(user => res.status(200).send(user));
};

exports.getUser = (req, res) => {
  model.User.findOne({
    where: {
      email: req.params.email
    }
  })
    .then(user => res.status(200).send(user))
    .catch(err => console.error(err));
};

exports.findUserAlt = (req, res) => {
  model.User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => res.status(200).send(user), err => console.log(err));
};

exports.updateUser = (req, res) => {
  console.log(req.body);
  const query = Object.entries(req.body).filter(item => item[0] !== 'userId');
  model.User.findById(req.body.userId).then(user => {
    query.forEach(([key, value]) => user.update({ [key]: value }));
    res.status(200).send(user);
  });
};
