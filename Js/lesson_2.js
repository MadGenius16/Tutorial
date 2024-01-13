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





