// app.js

// Alpine.js initialization
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
      // Data properties
      books: [],
      newBook: {
        title: '',
        author: '',
        genre: ''
      },
      loggedIn: false,
      userToken: '',
  
      // Methods
      async fetchBooks() {
        try {
          const response = await fetch('/api/books');
          if (!response.ok) {
            throw new Error('Failed to fetch books');
          }
          const data = await response.json();
          this.books = data;
        } catch (error) {
          console.error(error);
          // Handle error (e.g., show error message to user)
        }
      },
      async addBook() {
        try {
          const response = await fetch('/api/books', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.userToken}`
            },
            body: JSON.stringify(this.newBook)
          });
          if (!response.ok) {
            throw new Error('Failed to add book');
          }
          this.books.push({ ...this.newBook });
          // Clear the form fields after adding a book
          this.newBook = { title: '', author: '', genre: '' };
        } catch (error) {
          console.error(error);
          // Handle error (e.g., show error message to user)
        }
      },
      async login() {
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'example', password: 'password' })
          });
          if (!response.ok) {
            throw new Error('Failed to login');
          }
          const data = await response.json();
          this.userToken = data.token;
          this.loggedIn = true;
          // Fetch books after successful login
          this.fetchBooks();
        } catch (error) {
          console.error(error);
          // Handle error (e.g., show error message to user)
        }
      },
      async logout() {
        // Clear user token and logged-in status
        this.userToken = '';
        this.loggedIn = false;
        // Clear books array
        this.books = [];
      }
    }));
  });
  