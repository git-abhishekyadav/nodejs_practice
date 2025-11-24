const Book = require('../models/book');

createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const newBook = new Book({ title, author });
        const savedBook = await newBook.save();
        return res.status(201).json(savedBook);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

updateBookById = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

deleteBookById =  async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        return res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

updateByPatch =  async (req, res) => {
   try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { createBook, getAllBooks, getBookById, updateBookById, deleteBookById, updateByPatch };