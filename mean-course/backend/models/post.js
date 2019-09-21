const mongoose = require('mongoose');

// A schema is a blueprint of database we are going to work with
const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema); // Creating a Post model with schema postSchema
// model fn returns a constructor and thus allows us to create a new Object in app.js file
