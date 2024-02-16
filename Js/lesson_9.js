/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

class Car {
  static description = "Клас для реалізації автомобіля!"; // статичне поле, воно доступне тільки ЧЕРЕЗ САМ КЛАС (фактично клас - це фукнція, а фукнція - це обʼєкт, так от статичне поле це просто поле цього обʼєкту). Вони не додаються в екземпляри, не наслідуються, вони існують тількт в обʼєкті класу і все

  static displayCarObj(carObj) {
    console.log("Обʼєкт автомобіля ->", carObj);
  }

  #owner; // створив приватне поле класу (вони доступні тільки всередині класу і все)

  // це метод, який викликається під час створення екземпляру класу
  constructor(brand, model, price, owner) {
    this.brand = brand; // публічне поле (доступне повсюди: всередині класу, в екземплярі, наслідуюється у дочірній клас)
    this.model = model;
    this.price = price;
    this.#owner = owner;
  }

  // публічний метод
  displayCarInfo() {
    console.log(
      `Марка автомобіля: ${this.brand}\nМодель автомобіля: ${
        this.model
      }\nЦіна автомобіля: ${this.price}$\nВласник автомобіля: ${this.#owner}`
    );
  }

  // приватний метод, доступний тільки всередині класу
  #checkEmail() {
    const email = prompt("Введіть свою пошту для підтвердження");
    return email === this.#owner;
  }

  // для того, щоб читати або перезаписувати приватні поля класу потрібно мати відповідні методи аксесори (get і set). Ці аксесори фактично створять в вашому екземплярі публічне поле яке буде робити те, що ви йому скажете.

  get owner() {
    if (this.#checkEmail()) {
      return this.#owner;
    }
  }

  set owner(newOwner) {
    if (this.#checkEmail()) {
      this.#owner = newOwner;
      console.log(`Власник успішно змінений! Новий власник: ${newOwner}`);
    } else {
      console.log("Поточний власник не є коректним! Спробуйте ще раз");
    }
  }
}

console.dir(Car);

console.log(Car.description); // звернення до статичного поля через сам клас

const infinityCar = new Car("Infinity", "Q60s", 30000, "aaa@gmail.com");
Car.displayCarObj(infinityCar);

infinityCar.displayCarInfo();
// console.log(infinityCar.#owner) //! Error
// console.log(infinityCar.owner);

// infinityCar.owner = "bbb@gmail.com";

Car.displayCarObj(infinityCar);

const bmwCar = new Car("BMW", "M3", 35000, "bbb@gmail.com");

Car.displayCarObj(bmwCar);

bmwCar.displayCarInfo();
/*
оператор new:
1. створює пустий обʼєкт, який називається екземпляром класу
2. викликає конструктор класу
3. під час виклику він встановлює контекст виконання (this) нашим пустим новоствореним обʼєктом. Тобто, метод constructor буде мати this яке вказує на наш пустий новий обʼєкт.
*/

// ======================================================

/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.name = "Rectangle";
  }

  greeting() {
    console.log(
      `I'm ${this.name}.\nMy width is ${this.width}\nMy height is ${this.height}`
    );
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimetr() {
    return this.width * 2 + this.height * 2;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length); // викликає конструктор батьківсього класу, це є обовʼязковим під час наслідування
    this.name = "Square";
  }

  greeting() {
    console.log(`I'm ${this.name}.\nMy side length is ${this.width}`);
  }
}


const rectangle = new Rectangle(10, 5);

rectangle.greeting();

console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimetr());

const square = new Square(5);

console.log(square);

square.greeting();

console.log(square.calculateArea());
console.log(square.calculatePerimetr());

// =================================================

/**
 * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

class Blogger {
  constructor({ name, age, numberOfPosts, topics }) {
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(amount) {
    this.numberOfPosts += amount;
  }
}

const mango = new Blogger({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});
console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);

console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

console.log(mango);

const poly = new Blogger({
  name: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// =====================================================

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #email;
  #login;

  constructor({ login, email }) {
    this.#email = email;
    this.#login = login;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.login); // Poly
poly.login = "Polycutie";
console.log(poly.login); // Polycutie

// =========================================================

/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const deleteIndex = this.items.indexOf(item);

    if (deleteIndex !== -1) {
      this.items.splice(deleteIndex, 1);
    } else {
      console.log("Такого товару не існує!");
    }
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem("🍌");
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

storage.removeItem("🍋");

storage.removeItem("🍇");
console.table(storage.items); // [ '🍎', '🍑', '🍌' ]