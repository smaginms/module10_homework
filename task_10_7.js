/*
Задание 7.

Дан массив.
Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, 
знаки, null и так далее.

*/

// 10.7

let arr = [1,2,3,4,5,'6a',null];
let sumEven = 0;
let sumOdd = 0;
let answ = '';

  for (let i = 0; i < arr.length; i++) {
    if ( Number(arr[i]) ) {
      if ( arr[i] % 2 == 1 ) {
        sumOdd += 1;
      } else if ( arr[i] % 2 == 0 ) {
        sumEven += 1;
      } 
    }
  }
console.log(sumEven, ' ', sumOdd);

 if ( sumEven > 0 && sumOdd == 0 && arr.length == sumEven) {
   answ = 'Все элементы массива чётные';
 } else if ( sumEven == 0 && sumOdd > 0 && arr.length == sumOdd ) {
   answ = 'Все элементы массива нечётные';
 } else if ( sumEven == 0 && sumOdd == 0 ) {
   answ = 'Массив не содержит чисел';
 } else {
   answ = 'Массив состоит из ' + arr.length + ' элемент(а/ов). ' + sumEven + ' из которых чётные, и ' + sumOdd + ' нечётные';
 }

console.log(answ);