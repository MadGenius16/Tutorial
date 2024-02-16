/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/*
1. this - це контекст виклику фукнції. Він вказує на тей обʼєкт, який цю функцію викликає. Тому, щоб зрозуміти чим буде this завжди треба дивитись на тип фукнції та на місце її виклику.

2. Якщо фукнція була викликана без контексту (без обʼєкту) - то this буде посилатись на Window(звичайний режим) або на undefined (суворий режим user strict)

3. При передачі функції у якості колбеку, контекст втрачається (тому що колбек фукнції під час передачі не викликаються), для його коректної передачі можна використовувати метод .bind()

4. Стрілочні функції не мають свого власного this. Тому вони беруть this у свого батька (в рамках того місця, де була створена стрілочна функція). Стрілочні функції запамʼятовуть this назавжди і потім його змінити не можна. Тому використання this у стрілочних фукнціях позбавлено сенсу (ніколи не використовуйте стрілочні фукнції як методи для обʼєктів). Також в суворому режимі стрілочні функції ігнорують звертання до глобального обʼєкту window.

*/

// ПРАВИЛА ВИЗНАЧЕННЯ THIS
// 1 Визначити з яким типом функції працюємо
// 2 Маємо умовне поділення на два табори
// 2.1 Перший це Function Declaration & Function Expression
// 2.2 Другий це Arrow Function
// 3 Function Declaration & Function Expression визначають this тим хто їх викликав, перший ліворуч
// 4 Arrow Function в рамках чого вона була створена

/**
 * Глобальний контекст
 */
function foo() {
  console.log("foo -> this", this);
}

// foo();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag; // тут відбулася втрата контексту, так як фукнція не була викликана

// console.log(outerShowTag)

// outerShowTag();

// const mango1 = {
//   tag: "Mango",
//   mangoShowTag: outerShowTag
// }

// mango1.mangoShowTag()

/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

function invokeAction(action) {
  console.log(action);
  action();
}

// invokeAction(jacob.showTag);

// This in Arrow Function

// const showThisArrow = () => console.log("Inside Arrow", this);

// showThisArrow();

// *** arrow fn as object methods

// const siteUser = {
//   username: "Vanya111",
//   sayHi: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.username}`);
//   },
// };

// // siteUser.sayHi()
// siteUser.sayHi.call(siteUser)

// ***

// const siteUser = {
//   username: "Vanya111",
//   sayHi() {
//     console.log(this);
//     console.log(`Hello, my name is ${this.username}`);
//     const arrowInside = () => {
//       console.log("Inside arrow fn", this);
//     };

//     arrowInside();
//   },
// };

// siteUser.sayHi();

// =======================================

function foo() {
  console.log("foo -> this", this);
}

// foo(); // Який this ??? - undefined

/**
 * -------------------------
 */
const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

// book.showThis(); // Який this ??? - book

const outerShowThis = book.showThis;
// outerShowThis(); // Який this ??? - undefined

const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ??? - TypeError

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const searchStone = this.stones.find((stone) => stone.name === stoneName);

    if (searchStone) {
      return searchStone.price * searchStone.quantity;
    }

    return 0;
  },
};

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600
// console.log(chopShop.calcTotalPrice("Ruby11")); //

// ================================

/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// ці методи потрібні щоб викликати фукнцію з новим контекстом (ми самі можемо його задати)

// call/apply - викликають функцію на місці, відрізняються тільки тим, що call приймає аргументи через кому, а apply приймає масив з аргументів

// bind - повертає копію фукнції з новим контекстом, щоб пізніше ми могли її викликати (наприклад, це може використовуватись під час передачі функції в якості колбеку)

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

// showThis(); // undefined

const objA = {
  a: 5,
  b: 10,
};

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */

const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

// changeColor.call(hat, "orange")
// console.log(hat);

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */

const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(5, counter.increment.bind(counter)); // при передачі цього методу ми втрачаємо контекст виклику (тому що фукнція не викликається), відповідно, щоб не втрачати його, потрібно його привʼязати, з цим нам допоможе метод bind(), викликавши його ми повернемо копію нашої функції до якої вже буде привʼязано контекст
updateCounter(45, counter.increment.bind(counter));
updateCounter(26, counter.decrement.bind(counter));

// ==============================

/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(Object.hasOwn(dog, "name")); // перевіряє чи є властивість обʼєкту власна, чи ні
// console.log(Object.hasOwn(dog, "legs"));

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (Object.hasOwn(dog, key)) {
//     console.log(key);
//   } else {
//     console.log(`Властивість ${key} не є власною`);
//   }
// }

/**
 * ----------------------------------------
 */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(Object.hasOwn(objA, "a")); // true
// console.log(objA.a); //"objA prop"

// console.log(Object.hasOwn(objA, "b")); // false
// console.log(objA.b); // "objB prop"

// console.log(Object.hasOwn(objA, "c")); // false
// console.log(objA.c); // "objC prop"

// console.log(Object.hasOwn(objA, "x")); // false
// console.log(objA.x); // undefined

// console.log(Object.hasOwn(objB, "c")); // false
// console.log(objB.c); // "objC prop"

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer));