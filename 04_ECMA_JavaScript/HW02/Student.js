export class Student{

  constructor(name, age, grade){
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo = () => `"${this.name}", ${this.age}, "${this.grade}"`;
}