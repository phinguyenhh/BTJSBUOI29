import { getELE } from "./getELE.js";
export function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            return false;
        }

        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;
    }
    this.checkID = function (value, spanID, message, mang) {
        var isExist = mang.some(function (nv, index) {
            return nv.id === value;
        });

        if (isExist) {
            getELE(spanID).innerHTML = message;
            getELE(spanID).style.display = "block";
            return false;
        }
        getELE(spanID).innerHTML = "";
        getELE(spanID).style.display = "none";
        return true;

    }
    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {

            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";

            return true;
        }

        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";

        return false;
    }
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (value.match(pattern)) {

            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";

            return true;
        }

        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";

        return false;
    }
    this.checkScore = function (value, spanID, message) {
        var pattern = /^[0-9]+$/
        if (value.match(pattern) && value >= 0 && value <= 10) {
            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";


            return true;
        }
        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";


        return false;
    }
    this.checkNumber = function (value, spanID, message) {
        var pattern = /^[0-9]+$/
        if (value.match(pattern)) {

            getELE(spanID).innerHTML = "";
            getELE(spanID).style.display = "none";

            return true;
        }

        getELE(spanID).innerHTML = message;
        getELE(spanID).style.display = "block";

        return false;
    }
}