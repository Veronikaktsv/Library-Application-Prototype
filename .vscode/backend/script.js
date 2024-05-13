// script.js

document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded.');

  // Example: Fetch books from API and display them on the page
  fetch('/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Example: Render list of books on the page
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });

  function renderBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear previous book list

    books.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.title} by ${book.author}`;
      bookList.appendChild(listItem);
    });
  }
});
