/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => number <= 10); // [5, 10]

// console.log(numbers);
// console.log(filteredNumbers);

/**
 * ---------------------------
 */
// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price < threshold);

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsOnSale повертає масив автомобілів
 * властивість onSale яких true.
 */

// const getCarsOnSale = (cars) => cars.filter((car) => car.onSale);

// console.table(getCarsOnSale(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));
// console.log(getCarsWithType(allCars, "electro"));



// =============================

// * Метод find

// * - Поелементно перебирає оригінальний масив
// * - Повертає перший елемент, що задовольняє умові або undefined


// const numbers = [5, 7, 8, 10, 60, 15, 20, 25];

// const number = numbers.find((number) => number % 2 === 0 && number % 5 === 0);

// const numbersFilter = numbers.filter(
//   (number) => number % 2 === 0 && number % 5 === 0
// );

// console.log(number);

// console.log(numbersFilter);

/**
* -----------------------------
*/
// const allCars = [
//  { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//  { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//  { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//  { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//  { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//  { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//  { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//  { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//  { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//  { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];

/**
* Шукаємо машину за моделлю
*/
// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(allCars, "F-150"));
// console.log(getCarByModel(allCars, "CX-9"));
// console.log(getCarByModel(allCars, "Cayenne"));

/**
* Шукаємо машину за типом кузова
*/

// const getCarByType = (cars, type) => cars.find((car) => car.type === type);

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));

// ============================

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 490, points: 92, online: false },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

// const isAllOnline = players.every((player) => player.online);
// console.log("isAllOnline:", isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */

// const isAnyOnline = players.some((player) => player.online);
// console.log("isAnyOnline:", isAnyOnline);

// const anyHardcorePlayers = players.some((player) => player.timePlayed >= 400);
// console.log("anyHardcorePlayers:", anyHardcorePlayers);

// ==============================

// * Метод reduce
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Значення, що повертається, залежить від розробника
//  */

// const numbers = [5, 10, 15, 20, 25];

//* without reduce
// let total = 0;

// for (const num of numbers) {
//   total += num;
// }

// console.log(total);

//* with reduce

// const totalSum = numbers.reduce((total, num) => total + num, 0);

/*
1. numbers.reduce((total = 0, num = 5) => total + num, 0) // 0 + 5
2. numbers.reduce((total = 5, num = 10) => total + num, 0) // 5 + 10 = 15
3. numbers.reduce((total = 15, num = 15) => total + num, 0) // 15 + 15 = 30
4. numbers.reduce((total = 30, num = 20) => total + num, 0) // 30 + 20 = 50
5. numbers.reduce((total = 50, num = 25) => total + num, 0) // 50 + 25 = 75

редьюс завжди повертає в якості результату своєї роботи останнє значення аккумулятору

аккумулятор отримує своє значення в результаті того, що повернула вам колбек фукнція редьюсу на попередній ітерації

аккумулятор - це просто зовнішня змінна, яка існує за межами нашого циклу. Саме тому вона доступна на кожній ітерації

*/

// console.log(totalSum);

/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, salary) => total + salary,
//   0
// );
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// const totalTimePlayed = players.reduce(
//   (total, player) => total + player.timePlayed,
//   0
// );

// якщо ви забуваєте поставити початкове значення для аккумулятора, відбувається дві дії:
// 1. аккумулятором стає перший елемент масиву, в нашому прикладі це обʼєкт ({ id: "player-1", name: "Mango", timePlayed: 310, online: false })
// 2. Ви пропускаєте першу ітерацію і починаєте відразу з 2ї

// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, product) => total + product.price * product.quantity,
//   0
// );

// const productsAmount = cart.reduce(
//   (total, product) => total + product.quantity,
//   0
// );

// console.log(totalAmount);
// console.log(productsAmount);
// console.log("Avr price:", (totalAmount / productsAmount).toFixed(2));

// ======

// let productsAmount = 0;

// const totalAmount = cart.reduce((total, product) => {
//   productsAmount += product.quantity;
//   return total + product.price * product.quantity;
// }, 0);

// console.log(totalAmount);
// console.log(productsAmount);
// console.log("Avr price:", (totalAmount / productsAmount).toFixed(2));

// =====

// const totalAmount = cart.reduce(
//   (total, product) => {
//     total[1] += product.quantity;
//     total[0] += product.price * product.quantity;
//     return total;
//   },
//   [0, 0]
// );

// console.log(totalAmount) // [840, 9], 840 - загальна сума, 9 - кількість товарів

// console.log(totalAmount[0]);
// console.log(totalAmount[1]);
// console.log("Avr price:", (totalAmount[0] / totalAmount[1]).toFixed(2));

// ===================================

// * Метод toSorted
//  *
//  * - Свій порядок сортування чисел
//  * - Свій порядок сортування рядків
//  * - Сортування об'єктів
//  *
//  * За замовчуванням:
//  * - сортує за зростанням
//  * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 

// const numbers = [1, 9, 6, 2, 3, 11];

// const sorted = numbers.toSorted((a, b) => a - b); // за зростанням
// const sorted = numbers.toSorted((a, b) => b - a); // за спаданням
// console.log("sorted ", sorted);

// const letters = ["b", "B", "a", "A"].toSorted((a, b) => a.localeCompare(b)); // за зростанням
// const letters = ["b", "B", "a", "A"].toSorted((a, b) => b.localeCompare(a)); // за спаданням

// console.log("letters", letters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// За ігровим часом
// const sortedByBestPlayers = players.toSorted(
//   (aPlayer, bPlayer) => bPlayer.timePlayed - aPlayer.timePlayed
// );
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted(
//   (aPlayer, bPlayer) => aPlayer.timePlayed - bPlayer.timePlayed
// );
// console.table(sortedByWorstPlayers);

// За першою буквою імені
// const byName = players.toSorted((aPlayer, bPlayer) =>
//   aPlayer.name[0].localeCompare(bPlayer.name[0])
// );
// console.table(byName);

// =====================================

// * Ланцюжки методів

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);

// const sorted = multByThree.toSorted((a, b) => b - a);
// console.log(sorted);

// const sortedbyChaining = numbers
//  .filter((num) => num > 2)
//  .map((num) => num * 3)
//  .toSorted((a, b) => b - a);

// console.log(sortedbyChaining);

/**
* -------------------------------------
*/
// const allCars = [
//  {
//    make: "Honda",
//    model: "CR-V",
//    type: "suv",
//    amount: 14,
//    price: 24045,
//    onSale: true,
//  },
//  {
//    make: "Honda",
//    model: "Accord",
//    type: "sedan",
//    amount: 2,
//    price: 22455,
//    onSale: true,
//  },
//  {
//    make: "Mazda",
//    model: "Mazda 6",
//    type: "sedan",
//    amount: 8,
//    price: 24195,
//    onSale: false,
//  },
//  {
//    make: "Mazda",
//    model: "CX-9",
//    type: "suv",
//    amount: 7,
//    price: 31520,
//    onSale: true,
//  },
//  {
//    make: "Toyota",
//    model: "4Runner",
//    type: "suv",
//    amount: 19,
//    price: 34210,
//    onSale: false,
//  },
//  {
//    make: "Toyota",
//    model: "Sequoia",
//    type: "suv",
//    amount: 16,
//    price: 45560,
//    onSale: false,
//  },
//  {
//    make: "Toyota",
//    model: "Tacoma",
//    type: "truck",
//    amount: 4,
//    price: 24320,
//    onSale: true,
//  },
//  {
//    make: "Ford",
//    model: "F-150",
//    type: "truck",
//    amount: 11,
//    price: 27110,
//    onSale: true,
//  },
//  {
//    make: "Ford",
//    model: "Fusion",
//    type: "sedan",
//    amount: 13,
//    price: 22120,
//    onSale: true,
//  },
//  {
//    make: "Ford",
//    model: "Explorer",
//    type: "suv",
//    amount: 6,
//    price: 31660,
//    onSale: false,
//  },
// ];

/**
* Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
* але тільки тих, які зараз на розпродажі.
*/
// const getModelsOnSale = (cars) =>
//  cars.filter((car) => car.onSale).map((car) => car.model);

// console.table(getModelsOnSale(allCars));

/**
* Нехай функція getSortedCarsOnSale повертає масив автомобілів
* на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
*/

// const getSortedCarsOnSale = (cars) =>
//  cars.filter((car) => car.onSale).toSorted((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(allCars));