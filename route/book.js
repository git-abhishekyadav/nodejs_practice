const router = require('express').Router();
const { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } = require('../controller/book.controller');  

// Create a new book
router.post('/create', createBook);

// Get all books
router.get('/getAllBooks', getAllBooks);

// Get a book by ID
router.get('/getBook/:id', getBookById);

// Update a book by ID
// PUT → Replace the entire resource
// The request body is assumed to be the complete new version of the object.
// Any field you don’t send is assumed to be removed or overwritten.

// {
//   "title": "New Title",
//   "author": null,
//   "year": null
// }
// (Unless the backend ignores missing fields.)
// use Book.findOneAndReplace({ _id: id }, req.body, { new: true });
// or Book.replaceOne({ _id: id }, req.body);
// This does a real full document replacement.
router.put('/update/:id', updateBookById);

// Delete a book by ID
router.delete('/delete/:id', deleteBookById);

// PATCH → Modify only the fields you send
// The request body contains only the changes.
// Missing fields are ignored; they remain unchanged.
router.patch('/partial-update/:id',updateByPatch);

module.exports = router;