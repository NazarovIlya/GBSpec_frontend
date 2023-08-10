import { Employee } from "./Employee.js";

export class Manager extends Employee{

  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo = () => `All the info of Manager is(are) ${this.name}, ${this.department}`;
}