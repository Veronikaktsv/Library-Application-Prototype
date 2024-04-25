document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
  const loginButton = document.getElementById('loginButton');
  const testButton = document.getElementById('testButton');
  const logoutButton = document.getElementById('logoutButton');
  const userForm = document.getElementById('userForm');

  saveButton.addEventListener('click', () => {
    // Implement logic to save new username and password to the database using Fetch
    // Use userForm.username.value and userForm.password.value to get the input values
  });

  loginButton.addEventListener('click', () => {
    // Implement logic to log the user in and receive a JWT token using Fetch
  });

  testButton.addEventListener('click', () => {
    // Implement logic to test the protected route by sending the JWT token back to the server using Fetch
  });

  logoutButton.addEventListener('click', () => {
    // Implement logic to log the user out (clear the JWT token from local storage)
    localStorage.removeItem('token');
  });
});
