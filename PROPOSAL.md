
# Project Overview

A simple web application that functions as a catalog for a book library makes up the project. There is a basic frontend interface and a REST API backend for the application. With varying degrees of access and functionality, it is intended to serve two user types: readers and librarians.

##  User Types and Functionalities
### 1. Reader (No Authentication Required)

Browse Books: Public users can explore the library's collection by listing books based on genre, author, or title without needing to log in.

### 2. Librarian (Authentication Required)

Manage Books: Librarians can perform standard book management operations after logging in. They can:
- Add New Books (POST): Introduce new books to the catalog, with information including title, author, and genre.
- Update Existing Books (PATCH): Modify information about books already in the catalog.
- Delete Books (DELETE): Remove books from the catalog that are no longer available or relevant.
## REST API Endpoint Design
### 1. User Registration and Authentication

- POST /api/register: Register a new librarian user.
- POST /api/login: Login as a librarian to get an authentication token.

### 2. Book Management

GET /api/books: Retrieve a list of all books or search books by title, author, or genre.
POST /api/books: Add a new book to the catalog (Librarian only).
PATCH /api/books/:id: Update an existing book in the catalog (Librarian only).
DELETE /api/books/:id: Delete a book from the catalog (Librarian only).

| Milestone                      | Description                                | Timeline  |
| :---                           |     :---                                   |  :---     |
| Project Setup	                 | Initial setup of project                   | Day 1-2   |
|                                |  structure and repositories                |           |
| Backend Development            | Develop REST API with user authentication  | Day 3-7   |
|                                |  and book management functionality         |           |
| Frontend Development           | Create responsive HTML/CSS/JS              | Day 8-12  |
|                                |  frontend with Alpine.js                   |           |        
| Integration and Testing        |Integrate frontend with backend             | Day 13-15 |
|                                | and perform testing                        |           |
| Documentation and Deployment   | Finalize documentation and                 | Day 16-18 |
|                                |  deploy the application                    |           |
