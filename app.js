// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const detectPort = require('detect-port');

// // Initialize the Express application
// const app = express();

// // Database connection setup
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'library_user', // Ensure this matches your user
//   password: 'your_password', // Ensure this matches your password
//   database: 'library'
// });

// connection.connect(error => {
//   if (error) {
//     console.error('Error connecting to the database:', error.message);
//     return;
//   }
//   console.log('Connected to the MySQL server.');
// });

// // Middleware setup
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));


// const authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'];

//     if (!token) return res.sendStatus(403);

//     jwt.verify(token, 'your_jwt_secret', (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

// app.use('/api/books', authenticateToken);


// // User Registration Endpoint
// app.post('/api/register', (req, res) => {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//         console.error('Validation Error: All fields are required');
//         return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

//     connection.query(sql, [username, email, hashedPassword], (err, result) => {
//         if (err) {
//             console.error('Database Insertion Error:', err);
//             return res.status(500).json({ success: false, message: 'Database insertion failed', error: err.sqlMessage });
//         }
//         console.log(`User ${username} registered successfully.`);
//         res.json({ success: true, message: 'User registered successfully' });
//     });
// });

// // User Login Endpoint
// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const sql = 'SELECT * FROM users WHERE username = ?';

//     connection.query(sql, [username], (err, results) => {
//         if (err) {
//             console.error('Database Fetch Error:', err);
//             return res.status(500).json({ success: false, message: 'Database error' });
//         }
//         if (results.length === 0) {
//             console.error('Authentication Error: Invalid username or password');
//             return res.status(401).json({ success: false, message: 'Invalid username or password' });
//         }

//         const user = results[0];
//         if (!bcrypt.compareSync(password, user.password)) {
//             console.error('Authentication Error: Invalid username or password');
//             return res.status(401).json({ success: false, message: 'Invalid username or password' });
//         }

//         const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//         console.log(`User ${username} logged in successfully.`);
//         res.json({ success: true, token });
//     });
// });



// // Get all books or search books by title, author, and genre
// app.get('/api/books', (req, res) => {
//     const search = req.query.search;
//     let sql = 'SELECT * FROM books WHERE 1=1';
//     let queryParams = [];

//     if (search) {
//         sql += ' AND (title LIKE ? OR author LIKE ? OR genre LIKE ?)';
//         queryParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
//     }

//     connection.query(sql, queryParams, (error, results) => {
//         if (error) {
//             console.error('Error fetching books:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         res.json(results);
//     });
// });


// // Add a new book
// app.post('/api/books', (req, res) => {
//     const { title, author, genre } = req.body;

//     if (!title || !author || !genre) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     const sql = 'INSERT INTO books (title, author, genre) VALUES (?, ?, ?)';
//     connection.query(sql, [title, author, genre], (error, results) => {
//         if (error) {
//             console.error('Error adding book:', error);
//             return res.status(500).json({ error: 'Database error', message: error.message });
//         }
//         res.status(201).json({ message: 'Book added successfully', id: results.insertId });
//     });
// });


// // Update a book
// app.patch('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, author, genre } = req.body;
//     const sql = 'UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?';

//     connection.query(sql, [title, author, genre, id], (error, results) => {
//         if (error) {
//             console.error('Error updating book:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         if (results.affectedRows === 0) {
//             res.status(404).json({ error: 'Book not found' });
//             return;
//         }
//         res.json({ message: 'Book updated successfully' });
//     });
// });

// // Delete a book
// app.delete('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = 'DELETE FROM books WHERE id = ?';

//     connection.query(sql, [id], (error, results) => {
//         if (error) {
//             console.error('Error deleting book:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         if (results.affectedRows === 0) {
//             res.status(404).json({ error: 'Book not found' });
//             return;
//         }
//         res.json({ message: 'Book deleted successfully' });
//     });
// });

// // Detect available server port and start server
// detectPort(3002, (err, port) => {
//     if (err) {
//         console.error('Error finding an open port:', err);
//         return;
//     }

//     if (port === 3002) {
//         console.log('Port 3002 is available!');
//     } else {
//         console.log(`Port 3002 is in use. Using port ${port} instead.`);
//     }

//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// });

// app.use('/api/books', (req, res, next) => {
//     // Placeholder for actual book routes
//     res.send('Book routes');
// });







// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const detectPort = require('detect-port');

// // Initialize the Express application
// const app = express();

// // Database connection setup
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'library_user', // Ensure this matches your user
//   password: 'your_password', // Ensure this matches your password
//   database: 'library'
// });

// connection.connect(error => {
//   if (error) {
//     console.error('Error connecting to the database:', error.message);
//     return;
//   }
//   console.log('Connected to the MySQL server.');
// });

// // Middleware setup
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // User Registration Endpoint
// app.post('/api/register', (req, res) => {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//         console.error('Validation Error: All fields are required');
//         return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

//     connection.query(sql, [username, email, hashedPassword], (err, result) => {
//         if (err) {
//             console.error('Database Insertion Error:', err);
//             return res.status(500).json({ success: false, message: 'Database insertion failed', error: err.sqlMessage });
//         }
//         console.log(`User ${username} registered successfully.`);
//         res.json({ success: true, message: 'User registered successfully' });
//     });
// });

// // User Login Endpoint
// app.post('/api/login', (req, res) => {
//     const { username, password } = req.body;
//     const sql = 'SELECT * FROM users WHERE username = ?';

//     connection.query(sql, [username], (err, results) => {
//         if (err) {
//             console.error('Database Fetch Error:', err);
//             return res.status(500).json({ success: false, message: 'Database error' });
//         }
//         if (results.length === 0) {
//             console.error('Authentication Error: Invalid username or password');
//             return res.status(401).json({ success: false, message: 'Invalid username or password' });
//         }

//         const user = results[0];
//         if (!bcrypt.compareSync(password, user.password)) {
//             console.error('Authentication Error: Invalid username or password');
//             return res.status(401).json({ success: false, message: 'Invalid username or password' });
//         }

//         const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//         console.log(`User ${username} logged in successfully.`);
//         res.json({ success: true, token });
//     });
// });

// // Books CRUD Endpoints
// // Get all books
// app.get('/api/books', (req, res) => {
//     const sql = 'SELECT * FROM books';
//     connection.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching books:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         res.json(results);
//     });
// });

// // Add a new book
// app.post('/api/books', (req, res) => {
//     const { title, author, genre } = req.body;
//     const sql = 'INSERT INTO books (title, author, genre) VALUES (?, ?, ?)';

//     connection.query(sql, [title, author, genre], (error, results) => {
//         if (error) {
//             console.error('Error adding book:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         res.status(201).json({ message: 'Book added successfully', id: results.insertId });
//     });
// });

// // Update a book
// app.patch('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, author, genre } = req.body;
//     const sql = 'UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?';

//     connection.query(sql, [title, author, genre, id], (error, results) => {
//         if (error) {
//             console.error('Error updating book:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         if (results.affectedRows === 0) {
//             res.status(404).json({ error: 'Book not found' });
//             return;
//         }
//         res.json({ message: 'Book updated successfully' });
//     });
// });

// // Delete a book
// app.delete('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = 'DELETE FROM books WHERE id = ?';

//     connection.query(sql, [id], (error, results) => {
//         if (error) {
//             console.error('Error deleting book:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         if (results.affectedRows === 0) {
//             res.status(404).json({ error: 'Book not found' });
//             return;
//         }
//         res.json({ message: 'Book deleted successfully' });
//     });
// });

// // Detect available server port and start server
// detectPort(3002, (err, port) => {
//     if (err) {
//         console.error('Error finding an open port:', err);
//         return;
//     }

//     if (port === 3002) {
//         console.log('Port 3002 is available!');
//     } else {
//         console.log(`Port 3002 is in use. Using port ${port} instead.`);
//     }

//     app.listen(port, () => {
//         console.log(`Server running on port ${port}`);
//     });
// });

// app.use('/api/books', (req, res, next) => {
//     // Placeholder for actual book routes
//     res.send('Book routes');
// });






const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const detectPort = require('detect-port');

// Initialize the Express application
const app = express();

// Database connection setup
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'library_user', // Ensure this matches your user
  password: 'your_password', // Ensure this matches your password
  database: 'library'
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error.message);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// Middleware setup
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// User Registration Endpoint
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        console.error('Validation Error: All fields are required');
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

    connection.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error('Database Insertion Error:', err);
            return res.status(500).json({ success: false, message: 'Database insertion failed', error: err.sqlMessage });
        }
        console.log(`User ${username} registered successfully.`);
        res.json({ success: true, message: 'User registered successfully' });
    });
});

// User Login Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ?';

    connection.query(sql, [username], (err, results) => {
        if (err) {
            console.error('Database Fetch Error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (results.length === 0) {
            console.error('Authentication Error: Invalid username or password');
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        const user = results[0];
        if (!bcrypt.compareSync(password, user.password)) {
            console.error('Authentication Error: Invalid username or password');
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        console.log(`User ${username} logged in successfully.`);
        res.json({ success: true, token });
    });
});

// Books CRUD Endpoints
// Get all books
// app.get('/api/books', (req, res) => {
//     const sql = 'SELECT * FROM books';
//     connection.query(sql, (error, results) => {
//         if (error) {
//             console.error('Error fetching books:', error);
//             res.status(500).json({ error: 'Database error', message: error.message });
//             return;
//         }
//         res.json(results);
//     });
// });

// Get all books or search books by title, author, and genre
app.get('/api/books', (req, res) => {
    const search = req.query.search;
    let sql = 'SELECT * FROM books WHERE 1=1';
    let queryParams = [];

    if (search) {
        sql += ' AND (title LIKE ? OR author LIKE ? OR genre LIKE ?)';
        queryParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    connection.query(sql, queryParams, (error, results) => {
        if (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Database error', message: error.message });
            return;
        }
        res.json(results);
    });
});


// Add a new book
app.post('/api/books', (req, res) => {
    const { title, author, genre, published_year } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'INSERT INTO books (title, author, genre, published_year) VALUES (?, ?, ?, ?)';
    connection.query(sql, [title, author, genre, published_year || null], (error, results) => {
        if (error) {
            console.error('Error adding book:', error);
            res.status(500).json({ error: 'Database error', message: error.message });
            return;
        }
        res.status(201).json({ message: 'Book added successfully', id: results.insertId });
    });
});

// Update a book
app.patch('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, genre, published_year } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = 'UPDATE books SET title = ?, author = ?, genre = ?, published_year = ? WHERE id = ?';
    connection.query(sql, [title, author, genre, published_year || null, id], (error, results) => {
        if (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ error: 'Database error', message: error.message });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json({ message: 'Book updated successfully' });
    });
});

// Delete a book
app.delete('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM books WHERE id = ?';

    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ error: 'Database error', message: error.message });
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json({ message: 'Book deleted successfully' });
    });
});

// Detect available server port and start server
detectPort(3002, (err, port) => {
    if (err) {
        console.error('Error finding an open port:', err);
        return;
    }

    if (port === 3002) {
        console.log('Port 3002 is available!');
    } else {
        console.log(`Port 3002 is in use. Using port ${port} instead.`);
    }

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
