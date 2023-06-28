import { getVALUE } from "./getVALUE.js";
import { validation } from "./main.js";
import { listPerson } from "./main.js";

export const getValueEmploy = () => {
  const id = getVALUE("idEmploy");
  const name = getVALUE("nameEmploy");
  const add = getVALUE("addressEmploy");
  const email = getVALUE("emailEmploy");
  const ngay = getVALUE("ngayEmploy");
  const luong = getVALUE("luongEmploy");
  let isValid = true;
  isValid &=
    validation.checkEmpty(
      id,
      "errorIdEmploy",
      "Tài khoản không được để trống"
    )
  isValid &=
    validation.checkEmpty(name, "errorNameEmploy", "Tên không được để trống") &&
    validation.checkName(name, "errorNameEmploy", "Tên không hợp lệ");
  isValid &= validation.checkEmpty(
    add,
    "errorAddressEmploy",
    "Địa chỉ không được để trống"
  );
  isValid &=
    validation.checkEmpty(
      email,
      "errorEmailEmploy",
      "Email không được để trống"
    ) && validation.checkEmail(email, "errorEmailEmploy", "Email không hợp lệ");
  isValid &=
    validation.checkEmpty(
      ngay,
      "errorNgayEmploy",
      "Ngày không được để trống"
    ) && validation.checkNumber(ngay, "errorNgayEmploy", "Ngày không hợp lệ");
  isValid &=
    validation.checkEmpty(
      luong,
      "errorLuongEmploy",
      "Lương không được để trống"
    ) && validation.checkNumber(luong, "errorLuongEmploy", "Lương không hợp lệ");
  if (isValid) {
    return [ngay, luong, id, name, add, email];
  }
};
