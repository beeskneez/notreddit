const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const router = require('./routes');
const app = express(); 
const db = require('./db/db.js')
const port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './../client/dist')));
app.use(router);

app.listen(port, () => {
  console.log('server is now listening on port: ' + port);
});

// * Get /subreddit
// * Get / (all feed)
// * Get /post
// * Get /userhistory
// * Post /login
// * Post /signup
// * Post /entry or post
// * Post /subreddit
// * Post /comment
// * Post /logout
// * Put /upvote
// * Put /downvote
// * Put /comment (nested comment)
// * Delete /post
// * Delete /comment