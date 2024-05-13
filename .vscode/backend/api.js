// api.js

const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./authMiddleware');
const { getAllBooks, addBook, updateBook, deleteBook } = require('./dataService');

// Public route to fetch all books
router.get('/books', getAllBooks);

// Protected routes for librarian
router.post('/books', authenticateToken, addBook);
router.patch('/books/:id', authenticateToken, updateBook);
router.delete('/books/:id', authenticateToken, deleteBook);

module.exports = router;
