const express = require("express");
const app = express();

/*app.use((req, res, next) => {
  console.log('Middleware one!');
  next(); // If no response is being sent then use next in a middleware so that next code blocks can be executed otherwise it will timeout
});*/

// Creating a route for fetching posts
app.use('/api/posts', (req, res, next) => {
  const posts = [
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
  ];
  res.status(200).json({
    status: 'Success',
    message: 'Post read successfully',
    posts: posts
  }); // sending a json response to client
});

app.use((req, res, next) => {
  console.log('Middleware Two!'); // Note that the log will come twice since favicon is also being loaded
  res.send('Express App Started!'); // No need of next since send is being used
});

module.exports = app;
