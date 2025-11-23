const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: 3,
    maxlength: 25,
  },    
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
    publishedDate: {
    type: Date,
    default: Date.now
  },    
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;