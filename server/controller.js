// TODO: create model for these to do something with
exports.getAll = (req, res) => {
  res.status(200).send([
    {
      id: 1,
      username: "lilray",
      title: "TIFU by inviting my grandma to prom",
      body: "Every woman deserves to go to a prom, no matter how old you are.",
      thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/170330122746-nanny-senior-prom-trnd-exlarge-169.jpg",
      likeCache: 71,
      commentCache: 8,
    },
    {
      id: 2,
      username: "ryansan",
      title: "Best homemade cookies",
      body: "Aint no cookie like a homemade cookie",
      thumbnail: "https://en.wikipedia.org/wiki/Cookie#/media/File:2ChocolateChipCookies.jpg",
      likeCache: 52,
      commentCache: 150,
    },
    {
      id: 3,
      username: "tbray",
      title: "Instant coffee cures cancer",
      body: "This coffee is amazeballs",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
      likeCache: 78,
      commentCache: 1,
    }
  ]);
};

exports.getOne = (req, send) => {
  res.status(200).send('get one');
};

exports.createOne = (req, send) => {
  res.status(200).send('create one');
};

exports.updateOne = (req, send) => {
  res.status(200).send('update one');
};

exports.deleteOne = (req, send) => {
  res.status(200).send('delete one');
};
