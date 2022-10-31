const BASE_URL = 'http://localhost:4040';

// const options = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     body: JSON.stringify({title: 'My Super Uber Amazing Book'}),
// }

// fetch(`${BASE_URL}/books/16`, options)
//     .then(res => res
//     .json()).then(console.log);
    
// і заливаємо то всьо в функцію

function updateBookById(update, bookId) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(update),
    };

    return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(res => res.json())
};

updateBookById({ title: 'My Just Amazing Book' }, 15);
updateBookById({ description: 'AUAUAUAUAUA' }, 13);
updateBookById({ pages: 2, author: 'Yuras Karas' }, 12);


