export class Book{

  constructor(title, author, pagesCount) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
  }

  displayInfo = () => `Аннотация книги "${this.title}":\nАвтор: ${this.author}\nКоличество страниц: ${this.pagesCount}`;  // возврат строки с целью использование различных метов (console.log()/alert()/confirm())        
}