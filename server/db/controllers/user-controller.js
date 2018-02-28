const db = require('../db.js');
const model = require('../models/user.js');

// TODO: create model for these to do something with
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
      }))
    .then((user) => {
      res.status(200).send(user);
    });
};

// exports.findUser = (req, res) => {
//   model.User.sync()
//     .then(() =>
//       model.User.findOne({
//         where: { email: req.body.email },
//       }))
//     .then((user) => {
//       res.status(200).send(user);
//       console.log('worked in login');
//     });
// };

exports.findUserAlt = (req, res) => {
  const id = req.body.email;
  model.User.findOne({
    where: {
      email: id,
    },
  }).then(
    (user) => {
      res.status(200).send(user);
    },
    (err) => {
      console.log(err);
    },
  );
};
