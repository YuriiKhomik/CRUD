const BASE_URL = 'http://localhost:2020';

// ця функція повертає проміс, результатом якого буде нова книжка

async function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    // const response = await fetch(`${BASE_URL}/books`, options);
    // const newBook = await response.json();
    // return newBook;
    // OR:
    const response = await fetch(`${BASE_URL}/books`, options);
    return await response.json();
}

// const newBook = {
//     title: 'My Extra Amazing Book',
//     subtitle: 'Just Training',
//     author: 'Yurii Khomik',
//     published: '1986-03-11T00:00:00.000Z',
//     publisher: 'Weimar Guten Büch',
//     pages: 995,
//     description: 'Ta y take',
//     website: 'http://navyvorit.com/',
// };

// addBook(newBook).then(book => console.log(book));

// // тому якщо ми використовуємо результат асинхронної функці, ви цю фунецію теж робимо асинхронною
// // і далі в зовнішньому коді використовуємо try...catch для відловлювання помилок
// // щось на кшталт

// async function asyncBookAndUpdateUi() {
//     try {
//         // тут виконується довгограюча асинхронна операція з промісом, тому тут доцільно використовувати try...catch
//         // кажемо: зачекай, коли виконається ця функція
//         const book = await addBook({});
//         console.log(book);
//     } catch (error) {
//         console.log(error);
//     }
// }

// // async await не можна використовувати поза межами функції просто так
// // якщо ми хочемо викликати addBook() саму по собі, то тоді потрібно використовувати .then.catch бо інакше вона повертає проміс

// // !!! .then.catch поза межами функції, коли викликаємо асинзронку
// // !!! try...catch всередині функції, коли викликаємо асинхронку
