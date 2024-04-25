async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function postData() {
    const data = { username: 'example' };
    const token = sessionStorage.getItem('token');
    try {
      const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify(data)
      });
      const jsonData = await response.json();
      console.log('Success:', jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function fetchWithErrorHandling() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  export { fetchData, postData, fetchWithErrorHandling };
  