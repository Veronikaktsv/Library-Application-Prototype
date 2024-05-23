# Library application prototype

This project is a simple web application that functions as a catalog for a book library. The program has a straightforward frontend UI and a REST API backend.

## Features
### Reader (No Authentication Required)
Browse books by genre, author, or title.

### Librarian (Authentication Required)
- Add new books to the catalog.
- Update existing books.
- Delete books from the catalog.

## Technologies Used
- Backend: Node.js, Express.js, MySQL
- Frontend: HTML5, CSS3, JavaScript (Alpine.js)
- Authentication: JWT (JSON Web Tokens)
- Data Management: MySQL

## Project Setup
### 1. Clone the repository:
```
git clone https://github.com/your-repo/library-application.git
cd library-application
```

### 2. Install dependencies:
```
npm install
```
### 3. Database Setup:

- Create a MySQL database and user with the necessary permissions.
- Update the database connection settings in app.js:
```
 const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'library'
});
```

### 4. Run the application:
```
node app.js
```
### 5. Access the application:
Open a browser and navigate to http://localhost:3002 (or the appropriate port if 3002 is in use).

## Endpoints
### User Registration and Authentication

- POST /api/register: Register a new librarian user.
- POST /api/login: Login as a librarian to get an authentication token.

### Book Management

- GET /api/books: Retrieve a list of all books or search books by title, author, or genre.
- POST /api/books: Add a new book to the catalog (Librarian only).
- PATCH /api/books/:id: Update an existing book in the catalog (Librarian only).
- DELETE /api/books/:id: Delete a book from the catalog (Librarian only).

## Contributing
### 1. Fork the repository
### 2. Create a new branch
```
git checkout -b feature-branch
```
### 3. Make your changes and commit
```
git commit -m 'Description of changes'
```
### 4. Push to the branch
```
git push origin feature-branch
```
### 5. Create a Pull Request


## Project Proposal
For more information about the project concept and plan, refer to the `PROPOSAL.md` file.

