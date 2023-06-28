// import { listFilterName } from "./getListByFilter.js";
let check = true;
export const getListByName = (listPerson) => {
  let newListPerson = [];
  if (check) {
    check = false;
    newListPerson = [...listPerson].sort((person2, person1) => {
      return person2.name
        .toLowerCase()
        .localeCompare(person1.name.toLowerCase());
    });
  } else if (!check) {
    check = true;
    newListPerson = [...listPerson].sort((person2, person1) => {
      return person1.name
        .toLowerCase()
        .localeCompare(person2.name.toLowerCase());
    });
  }
  return newListPerson;
};
