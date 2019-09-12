const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log('Middleware one!');
  next(); // If no response is being sent then use next in a middleware so that next code blocks can be executed otherwise it will timeout
});

app.use((req, res, next) => {
  console.log('Middleware Two!'); // Note that the log will come twice since favicon is also being loaded
  res.send('Express App Started!'); // No need of next since send is being used
});

module.exports = app;
