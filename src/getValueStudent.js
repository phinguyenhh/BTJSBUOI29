import { getVALUE } from "./getVALUE.js";
import { validation } from "./main.js";
import { listPerson } from "./main.js";
export const getValueStudent = () => {
  const id = getVALUE("idStd");
  const name = getVALUE("nameStd");
  const add = getVALUE("addressStd");
  const email = getVALUE("emailStd");
  const toan = getVALUE("toanStd");
  const ly = getVALUE("lyStd");
  const hoa = getVALUE("hoaStd");

  let isValid = true;
  isValid &=
    validation.checkEmpty(id, "errorIdStd", "Tài khoản không được để trống")
  isValid &=
    validation.checkEmpty(name, "errorNameStd", "Tên không được để trống") &&
    validation.checkName(name, "errorNameStd", "Tên không hợp lệ");
  isValid &= validation.checkEmpty(
    add,
    "errorAddressStd",
    "Địa chỉ không được để trống"
  );
  isValid &=
    validation.checkEmpty(
      email,
      "errorEmailStd",
      "Email không được để trống"
    ) && validation.checkEmail(email, "errorEmailStd", "Email không hợp lệ");
  isValid &=
    validation.checkEmpty(toan, "errorToanStd", "Điểm không được để trống") &&
    validation.checkScore(toan, "errorToanStd", "Điểm không hợp lệ");
  isValid &=
    validation.checkEmpty(ly, "errorLyStd", "Điểm không được để trống") &&
    validation.checkScore(ly, "errorLyStd", "Điểm không hợp lệ");
  isValid &=
    validation.checkEmpty(hoa, "errorHoaStd", "Điểm không được để trống") &&
    validation.checkScore(hoa, "errorHoaStd", "Điểm không hợp lệ");
  if (isValid) {
    return [toan, ly, hoa, id, name, add, email];
  }
};
