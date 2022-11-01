// // try catch рятує код від падіння, якщо на шляху його виконання зустрічаються помилки
// // try catch не вміє відловлювати синтаксичні помилки, він може ловити лише runtime errors (помилки виконання коду)

// try {
//   console.log('Inside try before myVar');

//   //неоголошена змінна, яка викличе помилку
//   myVar;

//   console.log('Inside try after myVar');
// } catch (error) {
//   console.log('Error!');
// }

// console.log('After try...catch');

// // перед тим, як виконуватись, код проходить фазу оцінки синтаксису (парсингу)
// // якщо на цій фазі інтерпритатор щось не може розпарсити, то код не доходить до етапу виконання

// // помилки відловлюються лише в синхронному коді:
// try {
//     console.log('Inside try before myVar');

//     setTimeout(() => {
//         myVar;
//     }, 1000);

//     console.log('Inside try after myVar');
// } catch (error) {
//     console.log('Error!');
// }

// console.log('After try...catch');

// // тоді родимо отак:
// try {
//     console.log('Inside try before myVar');

//     setTimeout(() => {
//         try {
//             myVar;
//         } catch {
//             console.log('Error in timeout');
//         }
//     }, 1000);

//     console.log('Inside try after myVar');
// } catch (error) {
//     console.log('Error!');
// }

// console.log('After try...catch');

try {
    console.log('Inside try before myVar');

    myVar;

    console.log('Inside try after myVar');
} catch (error) {
    console.log(error);
    console.log('Error!');
}

console.log('After try...catch');
