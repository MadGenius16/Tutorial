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








