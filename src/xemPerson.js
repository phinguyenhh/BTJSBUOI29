import { listPerson } from "./main.js";
import { resetForm } from "./resetForm.js";
import { getELE } from "./getELE.js";
export const xemPerson = (id) => {
  const index = listPerson.timIndex(id);
  resetForm();
  if (index > -1) {
    let personFinded = listPerson.mang[index];
    let type = personFinded.type;
    const tabpanes = document.querySelectorAll(".tab-pane");
    tabpanes.forEach((tabpane) => tabpane.classList.remove("active", "show"));
    const navlinks = document.querySelectorAll(".nav-link");
    navlinks.forEach((navlink) => navlink.classList.remove("active"));
    switch (type) {
      case "Student":
        getELE("student-tab-pane").classList.add("active", "show");
        getELE("student-tab").classList.add("active");
        getELE("employee-tab").disabled = true;
        getELE("customer-tab").disabled = true;
        getELE("themStd").disabled = true;
        getELE("idStd").disabled = true;

        document.getElementById("idStd").value = personFinded.id;
        document.getElementById("nameStd").value = personFinded.name;
        document.getElementById("addressStd").value = personFinded.address;
        document.getElementById("emailStd").value = personFinded.email;
        document.getElementById("toanStd").value = personFinded.toan;
        document.getElementById("lyStd").value = personFinded.ly;
        document.getElementById("hoaStd").value = personFinded.hoa;
        break;
      case "Employee":
        getELE("employee-tab-pane").classList.add("active", "show");
        getELE("employee-tab").classList.add("active");
        getELE("student-tab").disabled = true;
        getELE("customer-tab").disabled = true;
        getELE("themEmploy").disabled = true;
        getELE("idEmploy").disabled = true;

        document.getElementById("idEmploy").value = personFinded.id;
        document.getElementById("nameEmploy").value = personFinded.name;
        document.getElementById("addressEmploy").value = personFinded.address;
        document.getElementById("emailEmploy").value = personFinded.email;
        document.getElementById("ngayEmploy").value = personFinded.ngay;
        document.getElementById("luongEmploy").value = personFinded.luong;
        break;
      case "Customer":
        getELE("customer-tab-pane").classList.add("active", "show");
        getELE("customer-tab").classList.add("active");
        getELE("employee-tab").disabled = true;
        getELE("student-tab").disabled = true;
        getELE("themCustomer").disabled = true;
        getELE("idCustomer").disabled = true;
        document.getElementById("idCustomer").value = personFinded.id;
        document.getElementById("nameCustomer").value = personFinded.name;
        document.getElementById("addressCustomer").value = personFinded.address;
        document.getElementById("emailCustomer").value = personFinded.email;
        document.getElementById("ctyCustomer").value = personFinded.cty;
        document.getElementById("hdCustomer").value = personFinded.gia;
        document.getElementById("dgCustomer").value = personFinded.danhGia;
        break;
      default:
        break;
    }
  }
};
