const db = require('./db/db.js');
const post = require('./db/model.js');

// TODO: create model for these to do something with
let dummyData = [
  {
    id: 1,
    username: 'lilray',
    title: 'TIFU by inviting my grandma to prom',
    body: 'Every woman deserves to go to a prom, no matter how old you are.',
    thumbnail:
      'https://cdn.cnn.com/cnnnext/dam/assets/170330122746-nanny-senior-prom-trnd-exlarge-169.jpg',
    likeCache: 71,
    commentCache: 8
  },
  {
    id: 2,
    username: 'ryansan',
    title: 'Best homemade cookies',
    body: 'Aint no cookie like a homemade cookie',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/1280px-2ChocolateChipCookies.jpg',
    likeCache: 52,
    commentCache: 150
  },
  {
    id: 3,
    username: 'tbray',
    title: 'Instant coffee cures cancer',
    body: 'This coffee is amazeballs',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG',
    likeCache: 78,
    commentCache: 1
  }
];

exports.getAll = (req, res) => {

  post.models.post.findAll({}).then(function(posts) {
    res.status(200).send(posts);
  }, function(err) {
    console.log(err);
  })
};

exports.getOne = (req, res) => {
  let id = req.params.id;
  post.models.post.findOne({
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
  post.models.post.sync()
    .then(function() {
      return post.models.post.create({
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

exports.defaultPathRedirect = (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/dist', 'index.html'));
};
