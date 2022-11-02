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

// function getFruit(name) {
//     const fruits = {
//         strawberry: 'полуничка',
//         kiwi: 'ківі',
//         apple: 'ябко',
//         blackberry: 'ожинка',
//     };
//     // // проміс, в який передаємо функцію, всередині якої запускаємо таймаут, всередині якого даємо функцію, яку потрібно запустити
//     // return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));

//     // or:

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(fruits[name]);
//         }, 500);
//     });
// }

// // це одна людина ходить за кожним фруктом окремо (тобто функції виконуються по черзі)
// // і відповідно, такий запит буде виконуватись 2000 мілісекунд
// // такий варік ок тоді, коли потрібно виконувати кожен наступний проміс по результату іншого

// async function aMakeSmoothie() {
//     console.time('aMakeSmoothie');

//     const apple = await getFruit('apple');
//     console.log(apple);

//     const kiwi = await getFruit('kiwi');
//     console.log(kiwi);

//     const strawberry = await getFruit('strawberry');
//     console.log(strawberry);

//     const blackberry = await getFruit('blackberry');
//     console.log(blackberry);

//     console.timeEnd('aMakeSmoothie');
// }

// aMakeSmoothie();

// // а цей варіант ок тоді, коли потрібно, щоби все разом отримати
// async function aMakeSmoothie() {
//     // console.time('aMakeSmoothie');

//     // повертаємо проміси кожного фрукта:
//     const apple = getFruit('apple');
//     const kiwi = getFruit('kiwi');
//     const strawberry = getFruit('strawberry');
//     const blackberry = getFruit('blackberry');

//     // console.log(apple);
//     // console.log(kiwi);
//     // console.log(strawberry);
//     // console.log(blackberry);

//     // і робимо всі 4 запити на проміси паралельно
//     // в такому випадку проміси будуть виконані за 500 мілісекунд
//     // Promise.all чекає виконання всіх промісів і повертає проміс тоді, коли останній проміс ресолвнеться
//     const fruits = await Promise.all([apple, kiwi, strawberry, blackberry]);
//     console.log(fruits);

//     // console.timeEnd('aMakeSmoothie');
// }

// aMakeSmoothie();

// // TRY...CATCH

// function getFruit(name) {
//     const fruits = {
//         strawberry: 'полуничка',
//         kiwi: 'ківі',
//         apple: 'ябко',
//         blackberry: 'ожинка',
//     };
//     // // проміс, в який передаємо функцію, всередині якої запускаємо таймаут, всередині якого даємо функцію, яку потрібно запустити
//     // return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));

//     // or:

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fruits[name]);
//         }, 500);
//     });
// }

// async function aMakeSmoothie() {
//     try {
//         const apple = getFruit('apple');
//         const kiwi = getFruit('kiwi');
//         const strawberry = getFruit('strawberry');
//         const blackberry = getFruit('blackberry');

//         const fruits = await Promise.all([apple, kiwi, strawberry, blackberry]);
//         console.log(fruits);
//         // асинхронна функція повертає проміс і те, що ми повернемо у зовнішній код - буде результат цього промісу
//         return fruits;
//     } catch (error) {
//         console.log(error);
//     }
// }
// // асинхронна функція повертає проміс і те, що ми повернемо у зовнішній код - буде результат цього промісу
// aMakeSmoothie().then(fruits => console.log(fruits));
