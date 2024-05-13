// dataService.js

// Dummy data (replace with database interactions)
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction' },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction' },
  { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Mystery' }
];

// Function to get all books
function getAllBooks(req, res) {
  res.json(books);
}

// Function to add a new book
function addBook(req, res) {
  const { title, author, genre } = req.body;
  const newBook = { id: books.length + 1, title, author, genre };
  books.push(newBook);
  res.status(201).json(newBook);
}

// Function to update an existing book
function updateBook(req, res) {
  const id = parseInt(req.params.id);
  const { title, author, genre } = req.body;
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { id, title, author, genre };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

// Function to delete a book
function deleteBook(req, res) {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}

module.exports = { getAllBooks, addBook, updateBook, deleteBook };
