const BASE_URL = 'http://localhost:4040';

// function fetchBooks() {
//     fetch(`${BASE_URL}/books`).then(res => res.json());
// }

// or via async await

async function fetchBooks() {
    const response = await fetch(`${BASE_URL}/books`);
    const books = await response.json();
    return books;
}

// biId

// function fetchBookById(bookId) {
//     fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }

// or via async await

async function fetchBookById(bookId) {
    const response = await fetch(`${BASE_URL}/books/${bookId}`);
    const book = await response.json();
    return book;
}

// fetchBooks();

// fetchBookById(2);

// fetchBookById(7);
