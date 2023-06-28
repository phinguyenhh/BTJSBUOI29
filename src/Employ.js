import { Person } from "./Person.js";

export class Employ extends Person {
  constructor(ngay, luong, ...person) {
    super(...person);
    this.ngay = ngay;
    this.luong = luong;
  }
  type = "Employee";
  salary() {
    return this.ngay * this.luong;
  }
}
