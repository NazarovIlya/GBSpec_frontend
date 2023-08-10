export class Employee{

  constructor(name) {
    this.name = name;
  }

  displayInfo = () =>
    `All the info of Employee is(are) ${this.name}`;
}