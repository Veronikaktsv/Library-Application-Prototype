// login.js

// Function to handle user login
async function login(username, password) {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
  
      const { token } = await response.json();
      // Save token to localStorage or sessionStorage
      localStorage.setItem('token', token); // Example: save token to localStorage
  
      return token;
    } catch (error) {
      console.error('Login failed:', error.message);
      throw error;
    }
  }
  
  // Example usage:
  // login('username', 'password')
  //   .then(token => console.log('Login successful. Token:', token))
  //   .catch(error => console.error('Login failed:', error.message));
  
  // Function to handle user logout
  function logout() {
    // Remove token from localStorage or sessionStorage
    localStorage.removeItem('token'); // Example: remove token from localStorage
  }
  
  // Example usage:
  // logout();
  