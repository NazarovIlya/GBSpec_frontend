// Задача №1
console.log('Задача № 1\n');
function checkNumber(number) {
  for (let i = 0; i <= number; i++) {
    if (i == 0) {
      console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
      console.log(`${i} - четное число.`);
    } else {
      console.log(`${i} - нечетное число.`);
    }
  }
}

let num = Number(prompt('Введите любое целое число:', 0));
console.log(num);
checkNumber(num);
console.log('\n\n');


// Задача №2
console.log('Задача № 2\n');
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
arr.splice(2, 2);
console.log(arr);
console.log('\n\n');

// Задача №3
console.log('Задача № 3\n');
function getArray(count) {
  const array = [];
  let number = 0;
  for (let i = 0; i < count; i++) {
    number = Math.floor(Math.random() * 10);
    console.log(number);
    array.push(number);
  }
  return array;
}

function getMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

num = Number(prompt('Введите количество элементов массива в виде целого числа:', 5));
console.log(num);
const newArr = getArray(num);
console.log(newArr);
let sum = newArr.reduce(((sum, el) => sum + el), 0);
console.log(`Сумма элементов массива ${sum}`);
let min = getMin(newArr);
console.log(`Значение минимального элемента ${min}`);
newArr.includes(3) ? console.log('Тройка в массиве есть.') : console.log('Тройка в массиве не найдена.');
console.log('\n\n');

// Задача №4
console.log('Задача № 4\n');
function getPyamid(count) {
  let str = '';
  for (let i = 0; i < count; i++) {
    str += 'x';
    console.log(str);  
  }
}

num = Number(prompt('Введите количество рядов:', 20));
getPyamid(num);
console.log('\n\n');
