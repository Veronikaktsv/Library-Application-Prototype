// Require necessary modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./userRoutes');
const authenticateToken = require('./authMiddleware');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware without custom options

// Define routes
app.use('/api/users', userRoutes); // Assuming 'userRoutes' contains user-related routes

// Protected route that requires JWT authentication
app.get('/protected', authenticateToken, (req, res) => {
    // Access user information from req.user
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
