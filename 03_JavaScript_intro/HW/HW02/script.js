// #1
let numFirst = 0;
let numSecond = 0;

numFirst = parseInt(prompt('Введите первое число:', 0));
console.log(numFirst);

numSecond = parseInt(prompt('Введите второе число:', 0));
console.log(numSecond);

if ((numFirst <= 1) && (numSecond >= 3)) {
  console.log(true);
} else {
  console.log(false);
}

// #2
let test = true;

(test === true) ? console.log('+++') : console.log('---');

// #3
let day = 0;

day = parseInt(prompt('Введите число месяца от 1 до 31:', '0-31'));
if (day >= 1 && day <= 31) {
  if (day >= 1 && day <= 10) {
    console.log('Первая декада')
  } else if (day >= 11 && day <= 20) {
    console.log('Вторая декада')
  } else {
    console.log('Третья декада');
  }
} else {
  console.log('Ошибка ввода.')
}

// #4
let number = 0;
let hundreds = 0;
let decades = 0;
let units = 0;

number = parseInt(prompt('Введите любое число:', '123'));

units = Math.floor(number % 10);
decades = Math.floor((number / 10) % 10);
hundreds = Math.floor((number / 100) % 10);

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${decades}, единиц: ${units}`)


