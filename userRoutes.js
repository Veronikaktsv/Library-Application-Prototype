// authRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Assuming you have a file named db.js for establishing the database connection
const router = express.Router();

// POST /register route handler
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Use a salt round of 10

        // Insert the new user into the database
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *';
        const values = [username, hashedPassword];
        const result = await pool.query(query, values);

        // Return the newly created user
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
