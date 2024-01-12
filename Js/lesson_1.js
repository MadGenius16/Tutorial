 let a = 5;
 console.log(a);

 a = 10;  
 console.log(a);

 const b = 3;
 console.log(b);

//  b=33;
//  console.log(b);



let c;
console.log(c);


// Типи даних(примітивні)

// number

// string

// Boolean(bool) (true, false)

// undefined

// null

///////////

const userAge = 15;
const userName = 'alex';
const isUserAdmin = false;

// typeof оператор , можна перевірити тип даних значення або змінної

console.log(typeof userAge);
console.log(typeof userName);
console.log(typeof isUserAdmin);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NaN);

// Помилки:
// 1. Звернення до змінних або констант до моменту створення(оголошення)
// 2. константа не змінна
// 3. звертання до неправильной змінной (букви повинні бути обднакові)

const g = 10;
const h = 5;

console.log(g - h)
console.log(g + h)
console.log(g * h)
console.log(g / h)
console.log(g % h)
console.log(g ** h)

// Задача про яблоки и виноград

const apple = 47;
const grapes = 137;
const total = grapes + apple
console.log(total);
const diff = grapes - apple
console.log(diff);

let students = 100;
// students = students + 50;
students =+ 50;
console.log(students);

// String (Рядки)

const firstName = 'Chelsy'
const lastName = 'Salo'
// const fullName = firstName + " " + lastName   
    // ИЛИ
const fullName = `${firstName} ${lastName}`
console.log(fullName);

// Довжина строки(length)

const message = 'This string is 38 chars long';
console.log(message.length);
console.log(message[3]);

const companyName = 'cyberdyne Systems'
const repairbots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairbots + defenceBots} bots in stock`;
console.log(msg);

// Перетворення типів рядків
   // Явне перетворення
console.log(String(5));
console.log(String(true));
console.log(String(false));
console.log(String(null));

    // НЕявне перетворення
    // (js не вміє працювати з різними типами,
    //  завжди треба прийти до одного)
  console.log('5' + 3);
  console.log('5' + true);
  console.log('5' + false);
  console.log('5' + null);
  console.log('5' + undefined);

  const huy= '1991';
  const huyAge= 2024 - Number(huy)
  console.log(huyAge);

 