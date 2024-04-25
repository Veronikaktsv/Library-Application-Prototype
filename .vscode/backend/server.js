require('dotenv').config();
 const express = require('express');
 const cors = require('cors'); // Import the cors middleware
 const bodyParser = require('body-parser');
 const app = express();
 const pool = require('./db.js')
 const routes = require('./routes.js');
 const api = require('./api.js')
 app.use(express.json());
 app.use(bodyParser.json());
 const authRoutes = require('./authRoutes.js'); // Assuming you named the route handler file authRoutes.js
 const authorize = require('./authorize.js');
 const authenticateToken = require('./authMiddleware.js');
 const dotenv = require('dotenv').config();
 // Define CORS options
 const corsOptions = {
     origin: 'http://example.com', // Specify allowed origin(s)
     methods: ['GET', 'POST'], // Specify allowed HTTP methods
     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
};

// Use the cors middleware with custom options
 app.use(cors(corsOptions));

 app.use('/', routes);
 app.use(express.json());
 app.use(bodyParser.json());

 // Mount the authRoutes middleware
 app.use('/', authRoutes);
 app.use('/api', api);

 // Protected route that requires JWT authentication
app.get('/protected', authenticateToken, (req, res) => {
    // Access user information from req.user
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});
 
 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});