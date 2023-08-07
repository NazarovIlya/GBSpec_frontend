import { Bank } from './models/Bank.js';
import { Book } from './models/Book.js';
import { Client } from './models/Client.js';
import { Student } from './models/Student.js';

// Задача №1
console.log('Задача № 1\n');

const book = new Book('Почему? Отчего? Зачем?', 'Джанни Родари', 592);
console.log(book.displayInfo());

console.log('\n');

// Задача №2
console.log('Задача № 2\n');

const studentJohn = new Student('John Smith', 16, '10th grade');
const studentJane = new Student('Jane Doe', 17, '11th grade');

console.log(studentJohn.displayInfo());
console.log(studentJane.displayInfo());

console.log('\n');

// Задача №3
console.log('Задача № 3\n');

const bank = new Bank('Мой Банк');

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);
console.log('\n');

bank.openAccount(client1, 123456789, 1000);
bank.openAccount(client2, 987654321, 500);
console.log('\n');

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
console.log('\n');

bank.checkBalance(123456789);
bank.checkBalance(987654321);
console.log('\n');