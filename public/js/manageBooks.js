

document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const bookIdInput = document.getElementById('bookId');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const genreInput = document.getElementById('genre');

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    const viewModal = document.getElementById('viewModal');
    const bookIdElem = document.getElementById('bookId');
    const bookTitleElem = document.getElementById('bookTitle');
    const bookAuthorElem = document.getElementById('bookAuthor');
    const bookGenreElem = document.getElementById('bookGenre');
    const span = document.getElementsByClassName('close')[0];

    function fetchBooks(query = '') {
        let url = '/api/books';
        if (query) {
            url += `?search=${encodeURIComponent(query)}`;
        }

        console.log('Fetching books with URL:', url); // Debugging

        fetch(url)
            .then(response => response.json())
            .then(books => {
                bookList.innerHTML = '';  // Clear the existing books
                books.forEach(book => {
                    const item = document.createElement('li');
                    item.innerHTML = `<h3>${book.title}</h3>
                                      <p>by ${book.author}</p>
                                      <p>Genre: ${book.genre}</p>
                                      <button onclick="viewBook(${book.id}, '${book.title}', '${book.author}', '${book.genre}')">View</button>
                                      <button onclick="editBook(${book.id}, '${book.title}', '${book.author}', '${book.genre}')">Edit</button>
                                      <button onclick="deleteBook(${book.id})">Delete</button>`;
                    bookList.appendChild(item);
                });
            })
            .catch(error => console.error('Error fetching books:', error));
    }

    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const bookId = bookIdInput.value;
        const formData = {
            title: titleInput.value.trim(),
            author: authorInput.value.trim(),
            genre: genreInput.value.trim()
        };

        const url = bookId ? `/api/books/${bookId}` : '/api/books';
        const method = bookId ? 'PATCH' : 'POST';

        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error: ' + data.message);
                return;
            }
            alert('Success: ' + data.message);
            fetchBooks(); // Refresh the book list
            bookForm.reset();  // Clear form
            bookIdInput.value = ''; // Clear the hidden bookId field
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to process book: ' + error.message);
        });
    });

    window.viewBook = function(bookId, title, author, genre) {
        bookIdElem.textContent = `BOOK ID ${bookId}`;
        bookTitleElem.textContent = title;
        bookAuthorElem.textContent = `by ${author}`;
        bookGenreElem.textContent = `Genre: ${genre}`;
        viewModal.style.display = 'block'; // Show the view modal
    };

    window.editBook = function(bookId, currentTitle, currentAuthor, currentGenre) {
        const newTitle = prompt("Enter new title:", currentTitle);
        if (newTitle === null) return; // Cancel was pressed

        const newAuthor = prompt("Enter new author:", currentAuthor);
        if (newAuthor === null) return; // Cancel was pressed

        const newGenre = prompt("Enter new genre:", currentGenre);
        if (newGenre === null) return; // Cancel was pressed

        const formData = {
            title: newTitle,
            author: newAuthor,
            genre: newGenre
        };

        fetch(`/api/books/${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Error: ' + data.message);
                return;
            }
            alert('Success: ' + data.message);
            fetchBooks(); // Refresh the book list
        })
        .catch(error => console.error('Error:', error));
    };

    window.deleteBook = function(bookId) {
        if (!confirm('Are you sure you want to delete this book?')) return;

        fetch(`/api/books/${bookId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert('Book deleted successfully!');
            fetchBooks();  // Refresh the book list
        })
        .catch(error => console.error('Error deleting book:', error));
    };

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        viewModal.style.display = 'none';
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == viewModal) {
            viewModal.style.display = 'none';
        }
    };

    // Search functionality
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        fetchBooks(query);
    });

    fetchBooks();  // Load initial list of books
});

