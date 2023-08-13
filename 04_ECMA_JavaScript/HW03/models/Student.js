export class Student{
  #name = '';
  #age = 0;
  #averageGrade = 0;

  constructor() {
    this.#name = 'name';
    this.#age = 0;
    this.#averageGrade = 0;
  }

  setName = (name) => this.#name = name;
  
  setAge = (age) => this.#age = age;

  setAverageGrade = (averageGrade) => this.#averageGrade = averageGrade;

  displayInfo = () => console.log(`
  Имя - ${this.#name},
  Возраст - ${this.#age},
  Средний балл - ${this.#averageGrade}.`);
}