// function getFruit(name) {
//     const fruits = {
//         strawberry: 'полуниця',
//         kiwi: 'ківі',
//         apple: 'ябко',
//     };

//     return Promise.resolve(fruits[name]);
// }

// getFruit('apple').then(apple => console.log(apple));
// // or
// getFruit('apple').then(console.log);

// // робимо функцію асинхронною

// // function declaration
// async function getFruit(name) {}

// // function expression
// const fn = async function getFruit(name) {};

// // arrow function
// const arr = async () => {};

// // object method
// const x = {
//     async getname() {},
// };

// // class method
// class X {
//     async getName (){}
// }

// // найголовніше правило - асинхронна функція завжди повертає проміс
// async function getFruit(name) {
//     const fruits = {
//         strawberry: 'полуниця',
//         kiwi: 'ківі',
//         apple: 'ябко',
//     };

//     return 5;
// };

// getFruit('apple').then(apple => console.log(apple));

// function getFruit(name) {
//     const fruits = {
//         strawberry: 'полуниця',
//         kiwi: 'ківі',
//         apple: 'ябко',
//         blackberry: 'ожинка',
//     };

//     return Promise.resolve(fruits[name]);
// }

// // в такому випадку ми можемо гарантувати, що яблуко буде виконане перед ківі
// // але якщо нам потрібно буде ще одинн проміс робити, то це виходить багато сміття

// function makeSmoothie() {
//     getFruit('apple').then(apple => {
//         console.log(apple);

//         getFruit('kiwi').then(apple => {
//             console.log(apple);

//             getFruit('strawberry').then(apple => {
//                 console.log(apple);

//                 getFruit('blackberry').then(apple => {
//                     console.log(apple);
//                 });
//             });
//         });
//     });
// }

// makeSmoothie();

// // ми кажемо: ей, зачекай, коли цей проміс ресолвнеться, і коли він резолвнеться, запиши значення в змінну apple
// // праворуч від await завжди має бути проміс
// // функція виконується асинхронно і крім того, вона вміє призупиняти своє виконання
// // в тому місці, де зустрівся await - функція призупинилась, а інший код далі виконується
// // і лише тоді, коли проміс резолвнувся, то виконання цієї функції продовжиться з того рядка, на якому був стоп
// async function aMakeSmoothie() {
//     const apple = await getFruit('apple');
//     console.log(apple);

//     const kiwi = await getFruit('kiwi');
//     console.log(kiwi);

//     const strawberry = await getFruit('strawberry');
//     console.log(strawberry);

//     const blackberry = await getFruit('blackberry');
//     console.log(blackberry);
// }

// aMakeSmoothie();

function getFruit(name) {
    const fruits = {
        strawberry: 'полуниця',
        kiwi: 'ківі',
        apple: 'ябко',
        blackberry: 'ожинка',
    };

    return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
    const apple = await getFruit('apple');
    console.log(apple);

    const kiwi = await getFruit('kiwi');
    console.log(kiwi);

    const strawberry = await getFruit('strawberry');
    console.log(strawberry);

    const blackberry = await getFruit('blackberry');
    console.log(blackberry);
}

aMakeSmoothie();
