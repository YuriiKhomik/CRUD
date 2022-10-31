const BASE_URL = 'http://localhost:4040';

const newBook = {

    "title": "My Super Amazing Book",
    "subtitle": "Just Training",
    "author": "Yurii Khomik",
    "published": "1986-03-11T00:00:00.000Z",
    "publisher": "Weimar Guten Büch",
    "pages": 995,
    "description": "Ta y take",
    "website": "http://navyvorit.com/",
}

// // ми кажемо:
// const options = {
//     // ей, привіт, зроби пліз отакий запит
//     method: 'POST',
//     // з таким заголовком контент тайп
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     // з отаким от тілом
//     body: JSON.stringify(newBook)
// }
// // по цій адресі і виведемо в консоль результат відповіді від бекенду
// fetch(`${BASE_URL}/books`, options).then(res => res.json()).then(console.log);

// і пхаємо то всьо в функцію

function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    }
    return fetch(`${BASE_URL}/books`, options)
        .then(res => res.json())
        .then(console.log);

};

addBook(newBook);