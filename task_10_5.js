/*
Задание 5.

Дан произвольный массив. 
Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

*/

// 10.5

let arr = ['1','2','3','4','5','a','a','f','f'];
console.log('В массиве ' + arr.length + ' элемент(а/ов)');
for (let i = 0; i < arr.length; i++) {
  console.log((i+1) + 'й элемент массива = ' + arr[i]);
}