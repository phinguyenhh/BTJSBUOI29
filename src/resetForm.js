import { getELE } from "./getELE.js";
export const resetForm = () => {
   getELE('formStd').reset()
   getELE('formEmp').reset()
   getELE('formCus').reset()
};
