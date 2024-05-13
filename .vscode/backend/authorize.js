// authorize.js

// Middleware function to authorize user roles
function authorize(role) {
    return (req, res, next) => {
      // Check if user role matches the required role
      if (req.user.role !== role) {
        return res.sendStatus(403); // Forbidden if user role does not match
      }
      next(); // Move to the next middleware
    };
  }
  
  module.exports = authorize;
  