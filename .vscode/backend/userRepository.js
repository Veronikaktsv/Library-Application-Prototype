// userRepository.js

const mysql = require('mysql2/promise');

// Create a MySQL pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_mysql_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to get all users
async function getAllUsers() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users');
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Function to get a user by ID
async function getUserById(userId) {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM users WHERE id = ?', [userId]);
    connection.release();
    return rows[0];
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
}

// Export the functions to make them accessible from other modules
module.exports = {
  getAllUsers,
  getUserById
};
