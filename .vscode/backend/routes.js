// routes.js

const express = require('express');
const router = express.Router();

// Define a route handler for POST requests
router.post('/api/resource', (req, res) => {
    const data = req.body; // Access the data sent in the request body
    console.log('Received data:', data);

    // Add your logic to process the data (e.g., save to database, etc.)

    res.send('Data received successfully'); // Send a response back to the client
});

router.get('/api/resource/:id', (req, res) => {
    const category = req.params.category; // Access the first URL segment (:category)
    const resourceId = req.params.id; // Access the URL parameter (:id)
    console.log('Received category:', category);
    console.log('Received resource ID:', resourceId);

    // Add your logic to fetch data based on the resource ID
    // (e.g., query a database, retrieve data, etc.)

    res.send(`Resource with ID ${resourceId} in category ${category} found`); // Send a response back to the client
});

module.exports = router;
