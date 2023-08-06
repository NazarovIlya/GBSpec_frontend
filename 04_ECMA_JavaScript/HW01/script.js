// Задача №1
console.log('Задача № 1\n');
getMin = (array) => Math.min(...array);

const arr = [1, 5, 7, 9];
console.log(arr);
console.log(`Наименшее число из массива ${getMin(arr)}`);
console.log('\n');


// Задача №2
console.log('Задача № 2\n');

function createCounter() {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());
console.log('\n');

// Задача №3
console.log('Задача № 3\n');
getFactorial = (number) => {
  if (number === 0) return 1;
  else return getFactorial(number - 1) * number;
}

console.log(getFactorial(5));
console.log(getFactorial(0));
console.log('\n');