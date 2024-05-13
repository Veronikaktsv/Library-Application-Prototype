// authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('./models'); // Assuming you have a User model defined

// Route to handle user login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find user by username in the database
  const user = await User.findOne({ where: { username } });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare password with hashed password stored in the database
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send token as response
  res.json({ token });
});

module.exports = router;
