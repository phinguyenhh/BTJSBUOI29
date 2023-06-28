import { ListPerson } from "./ListPerson.js";
import { Student } from "./Student.js";
import { Employ } from "./Employ.js";
import { Customer } from "./Customer.js";
import { Validation } from "./Validation.js";

import { getELE } from "./getELE.js";
import { getValueStudent } from "./getValueStudent.js";
import { getValueEmploy } from "./getValueEmploy.js";
import { getValueCustomer } from "./getValueCustomer.js";
import { getListByFilter, filterList } from "./getListByFilter.js";
import { getListByName } from "./getListByName.js";

import { setLocalStorage, getLocalStorage } from "./localStorage.js";
import { showTable } from "./showTable.js";
import { resetForm } from "./resetForm.js";

export const listPerson = new ListPerson();
export const validation = new Validation();
getLocalStorage();

getELE("themStd").addEventListener("click", () => {
  const inforStudent = getValueStudent();
  let isValid = true;

  if (inforStudent) {
    const student = new Student(...inforStudent);
    isValid = validation.checkID(
      student.id,
      "errorIdStd",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      listPerson.themPerson(student);
      setLocalStorage();
      showTable(listPerson.mang);
    } else {
      alert("Cập nhật thất bại");
    }
  } else {
    showTable(listPerson.mang);
  }
});

getELE("themEmploy").addEventListener("click", () => {
  const inforEmploy = getValueEmploy();
  let isValid = true;

  if (inforEmploy) {
    const employ = new Employ(...inforEmploy);
    isValid = validation.checkID(
      employ.id,
      "errorIdEmploy",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      listPerson.themPerson(employ);
      setLocalStorage();
      showTable(listPerson.mang);
    } else {
      alert("Cập nhật thất bại");
    }
  } else {
    showTable(listPerson.mang);
  }
});

getELE("themCustomer").addEventListener("click", () => {
  const inforCustomer = getValueCustomer();
  let isValid = true;
  if (inforCustomer) {
    const customer = new Customer(...inforCustomer);
    isValid = validation.checkID(
      customer.id,
      "errorIdCustomer",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      listPerson.themPerson(customer);
      setLocalStorage();
      showTable(listPerson.mang);
    } else {
      alert("Cập nhật thất bại");
    }
  } else {
    showTable(listPerson.mang);
  }
});

const btns = document.querySelectorAll(".filter .btn-filter");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.textContent.trim();
    var listFilter = getListByFilter(listPerson, filter);
    showTable(listFilter);
  });
});

getELE("filterName").addEventListener("click", () => {
  var listFilter = getListByFilter(listPerson, filterList);
  const listPersonByName = getListByName(listFilter);
  showTable(listPersonByName);
});

const btnTypes = document.querySelectorAll(".btnXem");
btnTypes.forEach((btnType, index) => {
  btnType.addEventListener("click", () => {});
});

getELE("btnThem").addEventListener("click", () => {
  resetForm();
  getELE("student-tab").disabled = false;
  getELE("employee-tab").disabled = false;
  getELE("customer-tab").disabled = false;
  getELE("themStd").disabled = false;
  getELE("themEmploy").disabled = false;
  getELE("themCustomer").disabled = false;
  getELE("idStd").disabled = false;
  getELE("idEmploy").disabled = false;
  getELE("idCustomer").disabled = false;
});

getELE("suaStd").addEventListener("click", () => {
  const inforStudent = getValueStudent();
  let isValid = true;

  if (inforStudent) {
    const student = new Student(...inforStudent);
    isValid = validation.checkID(
      student.id,
      "errorIdStd",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      const check = listPerson.capNhat(student);
      if (check) {
        setLocalStorage();
        showTable(listPerson.mang);
      } else {
        alert("Cập nhật thất bại");
      }
    }
    alert("Cập nhật thất bại");
  } else {
    alert("Cập nhật thất bại");
    showTable(listPerson.mang);
  }
});

getELE("suaEmploy").addEventListener("click", () => {
  const inforEmploy = getValueEmploy();
  let isValid = true;

  if (inforEmploy) {
    const employ = new Employ(...inforEmploy);
    isValid = validation.checkID(
      employ.id,
      "errorIdEmploy",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      const check = listPerson.capNhat(employ);
      if (check) {
        setLocalStorage();
        showTable(listPerson.mang);
      } else {
        alert("Cập nhật thất bại");
      }
    }
    alert("Cập nhật thất bại");
  } else {
    alert("Cập nhật thất bại");
    showTable(listPerson.mang);
  }
});

getELE("suaCustomer").addEventListener("click", () => {
  const inforCustomer = getValueEmploy();
  let isValid = true;

  if (inforCustomer) {
    const customer = new Customer(...inforCustomer);
    isValid = validation.checkID(
      customer.id,
      "errorIdCustomer",
      "Tài khoản bị trùng",
      listPerson.mang
    );
    if (isValid) {
      const check = listPerson.capNhat(customer);
      if (check) {
        setLocalStorage();
        showTable(listPerson.mang);
      } else {
        alert("Cập nhật thất bại");
      }
    }
    alert("Cập nhật thất bại");
  } else {
    alert("Cập nhật thất bại");
    showTable(listPerson.mang);
  }
});
