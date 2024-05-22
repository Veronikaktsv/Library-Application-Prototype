document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success) {
            sessionStorage.setItem('token', data.token);
            alert('Login successful!');
            window.location.href = 'manageBooks.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
