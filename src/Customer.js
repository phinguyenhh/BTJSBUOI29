import { Person } from "./Person.js";

export class Customer extends Person {
  constructor(cty, gia, danhGia, ...person) {
    super(...person);
    this.cty = cty;
    this.gia = gia;
    this.danhGia = danhGia;
  }
  type = "Customer";
}
