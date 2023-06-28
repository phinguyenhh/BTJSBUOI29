import { listPerson } from "./main.js";
import { setLocalStorage } from "./localStorage.js";
import { showTable } from "./showTable.js";

export const xoaPerson = (id) => {
  listPerson.xoaPerson(id);
  showTable(listPerson.mang);
  setLocalStorage();
};
