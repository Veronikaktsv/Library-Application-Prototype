// userRoutes.js

const express = require('express');
const router = express.Router();
const userRepository = require('./userRepository');

// Route to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get a user by ID
router.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userRepository.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other user-related routes can be defined here

module.exports = router;
