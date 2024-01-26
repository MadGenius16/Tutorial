// Масиви

// Методи масиву

// - join
// - split
// - slice
// - concat
// - indexOf
// - push/pop

const courses = ['HTML', 'CSS', 'JS', 'REACT'];

// - join- цей метод повертає рядоку якому будуть склей. всі
// елементи масиву. + між комами буде символ, який передамо
// в якості параметру в дужках join() . якщо не передавати знач параметру ,
// то за замовч. буде кома

console.log(courses.join(', '))
console.log(courses.join(''))
console.log(courses.join())

// - split - цей метод викликається на рядках та повертає масив у якому кожен
// елемент це частина рядка,ЯКА  була hозбита за допомогою символу в дужках split()

console.log('hello world!')
console.log('hello world!'.split(''))
console.log('hello world!'.split(' '))

// - slice() - повертає новий масив , який є копією частини масиву на якому викликається метод

const base = courses.slice(0, 3)
console.log(base)

// concat - повертає новий масив, у якому будуть всі масиви, які ви передаєте в якості аргументів
// Цей метод зливає всі масиви в один

const bases = ['HTML', 'CSS', 'JS']
const adv = ['REACT', 'SQL']
const allStack = bases.concat(adv)
console.log(allStack)

// indexOf - повертає індекс першого знач у масиві? якщо такого не має то повертає -1

console.log(courses.indexOf('JS'))

// push() - додає в кінець масиву один або декілька елементів.
// pop() - видаляє один елемент з кінця масиву

courses.push('NODE.JS', 'REACT NATIVE')
console.log(courses)

const friends = ['Mango', 'Poly', 'Alex', 'Ivan']
for(const friend of friends)
console.log(friend)

console.table(friends) //- виводить в консоль таблицю з індексом і знач.



// задачі

// Напиши скрипт для обчислення площі прямокутника зі стор.
// знач. яких зберігаються у змінній values у вигляді рядка.
// Значення розділенні пробілом.

const values = '8 11';

console.log(calculateArea(values))

function calculateArea(values) {
  const valuesArr = values.split(' ');
  const width = Number(valuesArr[0])
  const height = Number(valuesArr[1])
  return width * height
}

// * Напиши скрипт для перебору масиву fruits.
//  * Для кожного елемента масиву виведи в консоль рядок
//  * у форматі номер_елемента: значення_елемента.
//  * Нумерація елементів повинна починатися з 1.
//  */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

for (let i = 0; i < fruits.length; i += 1) {
  console.log(`${i + 1}: ${fruits[i]}`);
}

// підрахувати суму всіх парних чисел у масиві

const numbers = [1, 5, 8, 9, 12, 4, 15, 30, 18, 14, 27]
let total= 0;
for (const number of numbers) {
  if (number % 2 ===0) {
    total+=number
    console.log(number)
  }
}
console.log('total:', total)


/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

displayAllPhonebookInfo(names, phones)

function displayAllPhonebookInfo(names, phones) {
  const namesArr = names.split(',')
  const phonesArr = phones.split(',')

  for(let i=0; i < namesArr.length; i+=1) {
    console.log(`${namesArr[i]}-${phonesArr[i]}`)
  }
}

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future";

console.log(cutString(string));
console.log(cutString("Hello everyone! I'm here!"));

function cutString(string) {
  const stringArr = string.split(' ')  // робимо з рядка масив 
  const cuttedString = stringArr.slice(1, stringArr.length-1)  // копіюємо частину масиву без першого і остан.
  const result = cuttedString.join(' ').trim() // збираємо масив у рядок(поєднувач між єлементам пробіл)
// та убираємо зайві пробіли на початку і у кінці рядка
  return result
  
}

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

 const value = [2, 17, 94, 1, 23, 37];
 console.log(findMin(value))

function findMin(value){

// 1. задаємо в якості min перший елемент масиву
// 2. запускаємо цикл на перебір масиву(починаючи з другого елем., перший ми вже використали)
// 3. порівняти поточне min знач з поточним елем масиву, якщо поточний елемент менший за min 
// то він стає min

let min = value[0];  // перший крок , перший елем масиву value[0]

  for(let i=1; i<value.length; i+=1){
    // другий крок, якщо поточний елем масиву менший за min
    if(value[i]<min) {
      min = value[i] // ТРЕТІЙ крок , то задаємо поточний елем масиву в якості min
    }
  } 
return min
}

