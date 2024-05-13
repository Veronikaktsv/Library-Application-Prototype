// loginRoute.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Login route
router.post('/login', (req, res) => {
  // Mock authentication (replace with your authentication logic)
  const { username, password } = req.body;
  if (username === 'exampleUser' && password === 'examplePassword') {
    // Generate JWT token
    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
