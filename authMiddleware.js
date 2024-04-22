// authMiddleware.js

const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];

    if (token == null) {
        return res.sendStatus(401); // Unauthorized if token is missing
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token is invalid
        }
        req.user = user; // Attach user information to request object
        next(); // Move to the next middleware
    });
}

module.exports = authenticateToken;
