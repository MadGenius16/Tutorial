// Псевдомасив arguments і Array.from

function fn() {
  console.log(arguments) // псевдомасив аргументів
  const args = Array.from(arguments) // перетворюємо псевдомасив 
  //на масив за необхідністю(якщо потрібні методи масиву)
  console.log(args)

}

fn(1, 2, 3)
fn(1, 2, 3, 4, 5)
fn(1, 2, 3, 4, 5, 6, 7)

//  Написати функц для складання довільної кількості аргументів(чисел)

const add = function() {
  let total=0;

  for(const arg of arguments) {
    // console.log(arg) проверка правильно ли ми получаем наши аргументи(1 2 3) (1 2 3 4 5 6 )
    total += arg;
  }
  return total;
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));

// напиши функцію calAverage() яка приймає довільну кількість аргументів 
// і повертає їхнє середнє знач. Усі аргументи числа.

function calAverage() {
  let total=0;
  for(const arg of arguments) {
    total += arg;
  }
  return total / arguments.length
}


console.log(calAverage(1, 2, 3, 4));
console.log(calAverage(14, 8, 2));
console.log(calAverage(27, 43, 8, 36));


// ============================================


// / * Напиши скрипт для перебору масиву fruits.
//  * який для кожного елемента виводить в консоль повідомлення у форматі номер елем і значення 
//  нумерація елементів починається з 1.

function logItems(){
for (let i = 0; i < arguments.length; i += 1) {
  console.log(`${i + 1} - ${arguments[i]}`);
}
}

logItems("🍎", "🍇", "🍑", "🍌", "🍋");


// **
//  * Напиши функцію printInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
//  * у парам. names та phones зберігаються рядки імен та телефонних номерів,
//  * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
//  * відповідність. Кількість імен та телефонів гарантовано однакова.
//  */

function printInfo(names, phones) {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  for(let i = 0; i < namesArr.length; i+=1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`)
  }
}

printInfo("Jacob,William,Solomon,Artemis", 
"89001234567,89001112233,890055566377,890055566300")


// напиши функцію formatTime(minutes) яка переведе знач minutes (кількість хв.)
// у рядок у форматі годин та хв. HH:MM


function formatTime(totalMinutes) {

  // вираховуємо кількість год в хв.(ділимо хв на 60)
  // вираховуємо залишок хв, (остача від ділення хв на  % 60)
  // додати нулик до резуль якщо довжина символів години або хв меньша за 2
  // сформувати рядок з часом
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  console.log(hours);
  console.log(minutes);

// Цей метод padStart можна викликати тільки на сроках(якщо довжина 
// меньша за 2 симв , метод додасть 0 на початок)
  const displayHours = String(hours).padStart(2, 0)
  const displayMinutes= String(minutes).padStart(2, 0)
  console.log(displayHours);
  console.log(displayMinutes);


return `${displayHours}:${displayMinutes}`
}

console.log(formatTime(70)) // '01:10'
console.log(formatTime(450))
console.log(formatTime(1000))
















