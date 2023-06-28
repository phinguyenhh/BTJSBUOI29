import { getELE } from "./getELE.js";
import { xoaPerson } from "./xoaPerson.js";
import { xemPerson } from "./xemPerson.js";
import { Student } from "./Student.js";

window.xoaPerson = xoaPerson;
window.xemPerson = xemPerson;

export const showTable = (listPerson) => {
  const content = listPerson.map((person) => {
    const {
      cty,
      gia,
      danhGia,
      ngay,
      luong,
      toan,
      ly,
      hoa,
      type,
      id,
      name,
      address,
      email,
    } = person;
    const dtb = (Number(toan)+Number(ly)+Number(hoa))/3
    const tongLuong = Number(ngay)*Number(luong)
    return `
        <tr>
                    <th scope="row">${id}</th>
                    <td scope="row">${type}</td>
                    <td scope="row">${name}</td>
                    <td scope="row">${email}</td>
                    <td scope="row">${address}</td>
                    <td scope="row">${toan == undefined ? "" : toan}</td>
                    <td scope="row">${ly == undefined ? "" : ly}</td>
                    <td scope="row">${hoa == undefined ? "" : hoa}</td>
                    <td scope="row">${type == "Student" ? dtb : ""}</td>
                    <td scope="row">${ngay == undefined ? "" : ngay}</td>
                    <td scope="row">${luong == undefined ? "" : luong}</td>
                    <td scope="row">${type == "Employee" ? tongLuong : ""}</td>
                    <td scope="row">${cty == undefined ? "" : cty}</td>
                    <td scope="row">${gia == undefined ? "" : gia}</td>
                    <td scope="row">${danhGia == undefined ? "" : danhGia}</td>
                    <td scope="row">
                        <button onclick=xoaPerson('${id}') class="btn btn-danger">Xóa</button>
                        <button onclick=xemPerson('${id}') class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal">Xem</button>
                    </td>
                </tr>
        `;
  });
  getELE("tbody").innerHTML = content.join("");
};
