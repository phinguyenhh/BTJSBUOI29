import { listPerson } from "./main.js";
import { showTable } from "./showTable.js";

export const setLocalStorage = () => {
  return localStorage.setItem("ListPerson", JSON.stringify(listPerson.mang));
};

export const getLocalStorage = () => {
  const dataLocal = JSON.parse(localStorage.getItem("ListPerson"));
  if (dataLocal !== null) {
    showTable(dataLocal);
    listPerson.mang = dataLocal;
  }
};
