const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
    fetch(`${BASE_URL}/books`).then(res => res.json());
};

function fetchBookById(bookId) {
    fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
};

fetchBooks();

fetchBookById(2);

fetchBookById(7);