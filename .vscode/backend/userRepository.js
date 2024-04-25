// userRepository.js

const pool = require('./db'); // Assuming you have a file named db.js for establishing the database connection

async function findUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const values = [username];
    
    try {
        const result = await pool.query(query, values);
        return result.rows[0]; // Return the first user found (assuming usernames are unique)
    } catch (error) {
        console.error('Error querying user by username:', error);
        throw error;
    }
}

module.exports = {
    findUserByUsername
};
