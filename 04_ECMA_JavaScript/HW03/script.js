import { Employee } from "./models/Employee.js";
import { Manager } from "./models/Manager.js";
import { Order } from "./models/Order.js";
import { Product } from "./models/Pruduct.js";


// Задача №1
console.log('Задача № 1\n');
const employee = new Employee('John Smith');
console.log(employee.displayInfo());
console.log();

const manager = new Manager('Jane Doe', 'Sales');
console.log(manager.displayInfo());
console.log('\n');

// Задача №2
console.log('Задача № 2\n');

const order = new Order(12345);
console.log(order);

const product_1 = new Product('Phone', 500);
console.log(product_1);
order.addProduct(product_1);
console.log(order);

const product_2 = new Product('Headphones', 100);
console.log(product_2);
order.addProduct(product_2);
console.log(order);

console.log(order.getTotalPrice());

console.log('\n');

// Задача №3
console.log('Задача № 3\n');


console.log('\n');