const db = require('../db.js');
const model = require('../models/post.js');

// TODO: create model for these to do something with
exports.getAll = (req, res) => {
  model.post.findAll({}).then(function(posts) {
    res.status(200).send(posts);
  }, function(err) {
    console.log(err);
  })
};

exports.getOne = (req, res) => {
  let id = req.params.id;
  model.post.findOne({
    where: {
      uid: id
    }
  }).then(function(post) {
    res.status(200).send(post);
  }, function(err) {
      console.log(err);
  });
};

exports.createOne = (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  model.post.sync()
    .then(function() {
      return model.post.create({
        uid: null,
        title: title,
        body: body
      })
    })
    .then(function(post) {
      res.status(200).send(post);
    });
};

exports.updateOne = (req, res) => {
  res.status(200).send('update one');
};

exports.deleteOne = (req, res) => {
  res.status(200).send('delete one');
};