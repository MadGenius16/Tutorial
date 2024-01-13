// перетворення типів:

// Явне перетворення:

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("25px")); // NaN
console.log(Number("Jacob")); // NaN

// неЯвне перетворення:

console.log(Number("5" * 2)); // 10
console.log(Number("10" - 2)); // 8
console.log(Number(5 - true)); // 4
console.log(Number(5 + true)); // 6
console.log(Number(5 * "a")); // NaN

// Оператори(порівняння, рівності(суворе і несуворе))

console.log(10 > 8);  // true
console.log(10 >= "7");  // true
console.log('2'> '12');  // true  !!! поривняння строки, вони поривнюються за юникодом(по перш. знаку 2(50)>1(49)
console.log('2'< '12');  // false
console.log('4' == 4);  // true  порівняння зі зведенням типів (несуворе)
console.log('6' === 6);  // false  (суворе порівняння, типи даних різні FALSE)
console.log('false' === false);  // false 
console.log(1 === true);  // false 
console.log(1 == true);  // true 
console.log('0' == false); // true 
console.log('Papaya' < 'papaya'); // true 
console.log(undefined == null);  // true (undefined і null унікальні знач. і дорівнюють тільки самі собі)
console.log(undefined === null);  // false 

console.log(null > 0);  // false 
console.log(null == 0);  // false   !!! тут undefined == null, (null-не перетвор на 0!!!) правило на ==
console.log(null >= 0);  // true 

// NaN - це єдине знач. в джс яке не може бути рівним собі
// для перевірки на NaN є функція із isNaN
console.log(NaN == NaN);  // false 
console.log(NaN === NaN);  // false 
console.log(isNaN(NaN));  // true 

// Перетворення на числа 

// Number.parseInt

let elementHeight = '20px';
elementHeight = Number.parseInt(elementHeight);
console.log(elementHeight);

// Number.parseFloat

let elementWidth = '200.5px';
elementWidth = Number.parseFloat(elementWidth);
console.log(elementWidth);

// Округлення

const value = 27.5;
console.log(Math.floor(value)); // округл. вниз 
console.log(Math.ceil(value));  // округл. вгору
console.log(Math.round(value)); // округл. звичайн. правил.

// ФУНКЦІЇ
// () список параметров
// {} тело фунции

function displayMsg(){
  console.log('hello World!!!')
}

displayMsg();
displayMsg();
displayMsg();

function greeting(username) {
  console.log(`Hello, ${username}!`);
}

greeting('Dima');
greeting('Alice');
greeting('John');

// Кожна функція в джс повинна щось повертати, 
// за замовч. усі функції повертають undefined

function sum(a, b) {
  const result = a + b;

  // оператор return:
  // 1. Зупиняє виконання функціі і виходить з неї,
  // 2. Повернення результату роботи фнкції в місці її викл.

  return result;
}

console.log(sum(5, 9));
console.log(sum(50, 90));

function convertToInt(string) {
  const number = Number.parseFloat(string);
  const result = Math.round(number);
  console.log(result);

  return result;

}

convertToInt('25.7px')   // 26
convertToInt('100.5px')   // 101
convertToInt('35.2px')   // 35

const newHeight =  convertToInt('25.7px') + 5;




function calcBMI(weight, height) {
  
// 1. знайти і замінити кому"," на крапку.
//    (через метод replace)

// 2. перетворюємо строку в число 
// ( приклад методом Number або parseFloat() )

// 3. рахуємо та округлити результат до однієї цифри після коми

// 1. крок
weight = weight.replace(",", ".")
height = height.replace(",", ".")

console.log(weight, height)

// 2. крок
weight = Number(weight);
height = Number(height);

console.log(weight, height)

// 3. крок

const result = weight / (height * height)

console.log(Number(result.toFixed(1)))

// метод toFixed округлює число, але повертає рядок(string)
// тому додаємо на Number 

return Number(result.toFixed(1))
}

const bmi = calcBMI('88,3', '1.75')
console.log(bmi); 