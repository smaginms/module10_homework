/*
Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

*/

// 10.3

let oldStr = prompt('Введите слово');
let newStr = '';
for ( let i = oldStr.length - 1; i >= 0; i--) {
   newStr += oldStr[i];
}
alert(oldStr + ' наоборот будет ' + newStr);

