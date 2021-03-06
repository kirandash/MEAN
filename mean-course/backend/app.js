const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://kirandash:ktv2W3li4UHbPOjG@cluster0-hqaum.mongodb.net/node-angular?retryWrites=true&w=majority").then(() => {
  console.log('Connected to Database!');
}).catch(() => {
  console.log('Error in connection');
});

/*app.use((req, res, next) => {
  console.log('Middleware one!');
  next(); // If no response is being sent then use next in a middleware so that next code blocks can be executed otherwise it will timeout
});*/

// Allowing CORS and headers for responses
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next(); // next, since we do want to go to next codes after setting the header
});

// Creating a route for fetching posts
app.get('/api/posts', (req, res, next) => {
  /*const posts = [
    {
      id: 'faaa1234567',
      title: 'First Server-side post',
      content: 'This is first post coming from the server.'
    },
    {
      id: 'fbbb1234568',
      title: 'Second Server-side post',
      content: 'This is second post coming from the server.'
    }
  ];*/
  Post.find().then(document => {
    res.status(200).json({
      status: 'Success',
      message: 'Post read successfully',
      posts: document
    }); // sending a json response to client
  });
});

// Creating post request
app.post('/api/post', (req, res, next) => {
  // const posts = req.body; // This requires body parser
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save().then(result => {
    console.log(result); // Will hold the result after pushing post to db
    res.status(201).json({ message: 'Post created successfully!', postId: result._id}); // 201 status = success with update
  }); // To save posts into database
});

// Delete Request
app.delete('/api/post/:id', (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    console.log('Deleted in backend' + req.params.id);
    res.status(200).json({ status: 'success', message: 'Post deleted successfully' });
  });
});

app.use((req, res, next) => {
  console.log('Middleware Two!'); // Note that the log will come twice since favicon is also being loaded
  res.send('Express App Started!'); // No need of next since send is being used
});

module.exports = app;
