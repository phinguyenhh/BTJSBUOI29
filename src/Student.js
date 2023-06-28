import { Person } from "./Person.js";

export class Student extends Person {
  constructor(toan, ly, hoa, ...person) {
    super(...person);
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
  }
  type = "Student";
}
