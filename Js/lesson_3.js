// Розгалудження (разветвление)

// if
// if...else
// блок else...if
// тернарний оператор

// цикли

if (30>3) {
  console.log('iстина')
} else{
  console.log('Ложь')
}

// return- только в середине функции

let num=0
while (num<5) {
  console.log(num)
  num++
}


let n=5
while (n) {
  console.log(n)
  n--
}

// конструкция do...while

let m=0
do{
  console.log(m)
  m++
} while (m < 5)


// // for цикл

// for(начало; условие; шаг){
//   тело цикла
//   тут будет віполняться код
// }

for (let num=0; num<5; num++) {
  console.log(num)
  
}

// методи рядків

const username = "Jacob Mercer";

// slice(start, end) метод для рядків який копіює і повертає пядрядок
// не змінюючи його

// start, end - індекси що відповідають за початок і кінець копіювання 

// 'hello'.slice(1, 3)-[1,3)- el
// 'hello'.slice(3)-[1,3)- lo
// 'hello'.slice(-1)- o(остання буква 'o')


const firstName = username.slice(0, 5)
const lastName = username.slice(6)
console.log(firstName)
console.log(lastName)



// toLowerCase/toUpperCase/

const userMsg= 'Hello mY nAMe is JacoB!'
console.log(userMsg.toLowerCase())
console.log(userMsg.toUpperCase())


// includes(string, position) перевіряє чи є підрядок string в рядку
// на якому викликається метод. Якщо потрібно шукати підрядок починаючи
// з певного індксу, можна вказати цей індекс другим параметром position.

const userStack = 'hello, I know HTML, CSS, JS, Node. Js'
const isUserknowHTML = userStack.includes("HTML")
console.log(`HTML: ${isUserknowHTML}`)
const isUserknowAngular = userStack.includes("Angular")
console.log(`Angular: ${isUserknowAngular}`)


// startsWith/endswith - перевіряють чи починаються/закінч. рядок 
// символом або іншим рядком. поверт. true / false

const url = 'https://example.com'

console.log(`site ${url} safty status ${isUrlSafe(url) }`);

function isUrlSafe(url) {
  return url.startsWith('https')
}


// indexOf(string)- повертає індекс початку підрядка string у рядку
// на якому викликається. Якщо такого підрядка не має повертає -1

const text='Hallo everyone. My name is Sean'
const firstSentence = getTextBeforeDivider(text, ".")
console.log(firstSentence)

function getTextBeforeDivider(text, divider) {
  const index = text.indexOf(divider)
  
  if(index===-1){
    console.log('такого не існує')
    return ""
  }
  return text.slice(0, index + 1)
}

// trim() -повертає новий рядок у якому видалені зайві 
// пробіли на початку і у кінцірядку

const firstNAme = '    John    '
console.log(`Hello ${firstNAme.trim()}!`)
















