import { getVALUE } from "./getVALUE.js";
import { validation } from "./main.js";
export const getValueCustomer = () => {
  const id = getVALUE("idCustomer");
  const name = getVALUE("nameCustomer");
  const add = getVALUE("addressCustomer");
  const email = getVALUE("emailCustomer");
  const cty = getVALUE("ctyCustomer");
  const gia = getVALUE("hdCustomer");
  const danhGia = getVALUE("dgCustomer");
  let isValid = true;
  isValid &=
    validation.checkEmpty(
      id,
      "errorIdCustomer",
      "Tài khoản không được để trống"
    )
    
  isValid &=
    validation.checkEmpty(
      name,
      "errorNameCustomer",
      "Tên không được để trống"
    ) && validation.checkName(name, "errorNameCustomer", "Tên không hợp lệ");
  isValid &= validation.checkEmpty(
    add,
    "errorAddressCustomer",
    "Địa chỉ không được để trống"
  );
  isValid &=
    validation.checkEmpty(
      email,
      "errorEmailCustomer",
      "Email không được để trống"
    ) &&
    validation.checkEmail(email, "errorEmailCustomer", "Email không hợp lệ");
  isValid &= validation.checkEmpty(
    cty,
    "errorCtyCustomer",
    "Công ty không được để trống"
  );
  isValid &=
    validation.checkEmpty(
      gia,
      "errorHdCustomer",
      "Hóa đơn không được để trống"
    ) && validation.checkNumber(gia, "errorHdCustomer", "Hóa đơn không hợp lệ");
  isValid &= validation.checkEmpty(
    danhGia,
    "errordgCustomer",
    "Đánh giá không được để trống"
  );
  if (isValid) {
    return [cty, gia, danhGia, id, name, add, email];
  }
};
