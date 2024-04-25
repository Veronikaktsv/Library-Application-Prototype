// db.js

const { Pool } = require('pg');

// Create a new pool instance with your PostgreSQL connection details
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;
