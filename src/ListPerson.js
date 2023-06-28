export class ListPerson {
  constructor() {
    this.mang = [];
  }
  themPerson(person) {
    this.mang.push(person);
  }
  timIndex(id) {
    let indexFind = -1;
    this.mang.map((person, index) => {
      if (person.id === id) {
        indexFind = index;
      }
    });
    return indexFind;
  }
  xoaPerson(id) {
    var index = this.timIndex(id);
    if (index > -1) {
      this.mang.splice(index, 1);
    }
  }
 capNhat(person) {
    var indexFind = this.timIndex(person.id);
    if (indexFind > -1) {
        this.mang[indexFind] = person;
        return true;
    } else {
        return false;
    }
}
}
