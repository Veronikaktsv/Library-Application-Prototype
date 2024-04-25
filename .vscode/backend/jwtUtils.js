// jwtUtils.js

const jwt = require('jsonwebtoken');

function generateJWT(user) {
    const payload = {
        userId: user.id,
        username: user.username,
        // Add any other relevant user information to the payload
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = {
    generateJWT
};
