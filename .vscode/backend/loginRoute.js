// loginRoute.js

const express = require('express');
const router = express.Router();
const generateJWT = require('./jwtUtils'); // Import the JWT generation function

// POST route for user login
router.post('/login', (req, res) => {
    // Perform user authentication (e.g., verify username and password)
    // If authentication succeeds, generate JWT token
    const user = {
        id: 123,
        username: 'example_user'
        // Add any other relevant user information
    };
    const token = generateJWT(user);
    res.json({ token });
});

module.exports = router;