// // Задача №1
// console.log('Задача № 1');
// function getCube(number) {
//   return number ** 3;
// } 

// let num = Number(prompt('Введите любое целое число', 5));
// console.log(num);
// let res = getCube(num);
// console.log(res);
// alert(`Куб числа ${num} равен ${res}`)


// // Задача №2
// console.log('Задача № 2')
// function getSalary(finance) {
//   return finance * 0.87;
// }

// num = Number(prompt('Введите размер заработной платы до вычета НДФЛ:', 50000));
// console.log(num);
// res = getSalary(num);
// console.log(res);
// alert(`Размер заработной платы за вычетом налогов равен ${res}`);


// // Задача №2
// console.log('Задача № 3')
// function getMax(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) max = array[i];    
//   }
//   return max;
// }

// function getArray() {
//   const arr = []
//   for (let i = 0; i < 3; i++) {
//     num = Number(prompt('Введите число через запятую:', 5));
//     arr.push(num);
//   }
//   return arr;
// }

// const myArr = getArray();
// console.log(myArr);
// let res = getMax(myArr)
// console.log(res);
// alert(`Наибольшее число - ${res}`)

// Задача №4
console.log('Задача № 4');

function getSum(a, b) {
  return a + b;
}

function getDiff(a, b) {
  if (a === b) return 0;
  else if (a > b) return a - b;
  else return b - a;
}

function getProduct(a, b) {
  return a * b;
}

function getQuotient(a, b) {
  if (b === 0) return 0;
  else return a / b;
}

function calc(act, first, second) {
  let result = 0;
  switch (act) {
    case 1:
      return result = getSum(first, second);
    case 2:
      return result = getDiff(first, second);
    case 3:
      return result = getProduct(first, second);
    case 4:
      return result = getQuotient(first, second);
    default:
      console.log('Ошибка.')
      alert('Ошибка.')
      break;
  }
  console.log(result);
}

function getData() {
  let act = Number(prompt('Выберите одно из действий: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление:', '1-4'));
  let a = Number(prompt('Введите первое число:', 5));
  let b = Number(prompt('Введите второе число:', 5))
  return { action: act, first: a, second: b };
}

let userData = getData();
console.log(userData);
res = calc(userData.action, userData.first, userData.second);
console.log(res);
alert(`Результат действия ${userData.action} равен ${res}`);