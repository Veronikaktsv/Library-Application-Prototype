document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('bookList');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const mainButton = document.getElementById('mainButton');


    const viewModal = document.getElementById('viewModal');
    const bookIdElem = document.getElementById('bookId');
    const bookTitleElem = document.getElementById('bookTitle');
    const bookAuthorElem = document.getElementById('bookAuthor');
    const bookGenreElem = document.getElementById('bookGenre');
    const closeModalButton = document.getElementsByClassName('close')[0];

    function fetchBooks(query = '') {
        let url = '/api/books';
        if (query) {
            url += `?search=${encodeURIComponent(query)}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(books => {
                bookList.innerHTML = '';  // Clear the existing books
                books.forEach(book => {
                    const item = document.createElement('li');
                    item.innerHTML = `<h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <p>Genre: ${book.genre}</p>
                    <button onclick="viewBook(${book.id}, '${book.title}', '${book.author}', '${book.genre}')">View</button>`;
  bookList.appendChild(item);
                });
            })
            .catch(error => console.error('Error fetching books:', error));
    }

    window.viewBook = function(bookId, title, author, genre) {
        bookIdElem.textContent = `BOOK ID ${bookId}`;
        bookTitleElem.textContent = title;
        bookAuthorElem.textContent = `by ${author}`;
        bookGenreElem.textContent = `Genre: ${genre}`;
        viewModal.style.display = 'block'; // Show the view modal
    };

    // Close the modal when the user clicks on <span> (x)
    closeModalButton.onclick = function() {
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

     // Navigate to the main page
     mainButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    fetchBooks();  // Load initial list of books
});
