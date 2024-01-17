"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(books) {
    this.#books = books;
  }

  // проверка, что список книг уникальный
  checkUnicBooks() {
    const setBooks = new Set(this.#books);
    try {
      if (this.#books.length !== setBooks.size) {
        throw new Error("вы ввели повторяющиеся книги");
      }
      return console.log("библиотека сформирована");
    } catch (error) {
      console.log(error.message);
    }
  }

  // получение списка книг
  getAllBooks() {
    return console.log(this.#books.join(", "));
  }

  // добавление книги в библиотеку
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error(
          `Такая книга: "${title}" - есть в библиотеке. Ее добавить нельзя`
        );
      }
      this.#books.push(title);
    } catch (error) {
      console.log(error.message);
    }
  }

  // удаление книги из библиотеки
  removeBook(title) {
    const index = this.#books.indexOf(title);
    try {
      if (index === -1) {
        throw new Error(
          `Такой книги: "${title}" - нет в библиотеке. Ее нельзя удалить`
        );
      }
      this.#books.splice(index, 1);
    } catch (error) {
      console.log(error.message);
    }
  }

  // проверка наличия книги в библиотеке
  hasBook(title) {
    if (!this.#books.includes(title)) {
      return false;
    }
    return true;
  }
}

const listBooks = new Library([
  "Война и мир",
  "Идиот",
  "Гроза",
  "Преступление и наказание",
]);

listBooks.checkUnicBooks();
console.log("\n");

console.log("Список книг:");
listBooks.getAllBooks();
console.log("\n");

console.log("Добавление кнги");
listBooks.addBook("Гроза");
listBooks.addBook("Мастер и Маргарита");
listBooks.getAllBooks();
console.log("\n");

console.log("Удаление кнги");
listBooks.removeBook("Маленький принц");
listBooks.removeBook("Гроза");
listBooks.getAllBooks();
console.log("\n");

console.log("Проверка наличие книги в библиотеке");
console.log(listBooks.hasBook("Гроза"));
console.log(listBooks.hasBook("Преступление и наказание"));
