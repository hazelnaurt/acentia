"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidBee = void 0;
let isEmpty = (val) => {
    let message;
    if (val === '') {
        message = true;
    }
    else {
        message = false;
    }
    return message;
};
let setRegExResponse = (value, regEx) => {
    let length1, length2, str;
    str = value;
    length1 = str.length;
    str = str.match(regEx);
    length2 = str === null ? 0 : str.length;
    if (length1 === length2) {
        return true;
    }
    else {
        return false;
    }
};
class Validate {
    constructor() {
        this.errrorArray = [];
    }
    isEmpty(name, value, fn) {
        if (!isEmpty(value)) {
            if (fn != undefined)
                fn(false);
        }
        else {
            if (fn != undefined)
                fn(true);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isAlpaNumeric(name, value, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            regEx = /[a-z0-9]/gi;
            if (setRegExResponse(value, regEx)) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Value must be alphanumeric",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isAlpa(name, value, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            regEx = /[a-z]/gi;
            if (setRegExResponse(value, regEx)) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Value must contain only letters of the alphabet",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isPassword(name, value, specialChars, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            let val = specialChars != undefined ? `[a-z0-9${specialChars}]` : "[a-z0-9]";
            //regEx = /[]/gi;
            regEx = new RegExp(val, 'gi');
            if (setRegExResponse(value, regEx)) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Password Contains invalid Characters",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isPhone(name, value, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            regEx = /[0-9 +-]/g;
            if (setRegExResponse(value, regEx)) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Not a valid phone number",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isNumeric(name, value, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            regEx = /[0-9]/g;
            if (setRegExResponse(value, regEx)) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Value must be numeric",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    isEmail(name, value, message, fn) {
        let regEx;
        if (!isEmpty(value)) {
            regEx = /^\w{2,10}[-._]?\w{1,10}@\w{2,10}[-.]?\w{2,10}[.-]\w{2,10}/gi;
            let str;
            str = value;
            str = str.match(regEx);
            if (str !== null) {
                if (fn != undefined)
                    fn(true);
            }
            else {
                if (message === '' || message === undefined) {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: "Not a valid email",
                        field: name
                    });
                }
                else {
                    if (fn != undefined)
                        fn(false);
                    this.errrorArray.push({
                        message: message,
                        field: name
                    });
                }
            }
        }
        else {
            if (fn != undefined)
                fn(false);
            this.errrorArray.push({
                message: "Field should not be empty",
                field: name
            });
        }
    }
    compareText(value1, value2, fn) {
        if (!isEmpty(value1) && !isEmpty(value2)) {
            if (value1 === value2) {
                fn(true, 'match');
            }
            else {
                fn(false, 'Do not match');
            }
        }
        else {
            if (value1 === '') {
                fn(false, "Value1 should not be empty");
            }
            else if (value2 === '') {
                fn(false, "Value2 should not be empty");
            }
        }
    }
    sanitize(value, phone) {
        let regEx = phone ? /[^0-9+]/g : /[^A-Za-z0-9+-.!@#$%&*]/g;
        let str = value;
        str = str.replace(regEx, '');
        return str;
    }
    getErrors() {
        return this.errrorArray;
    }
    setError(message, field) {
        this.errrorArray.push({
            message: message,
            field: field
        });
    }
    reset() {
        this.errrorArray = [];
    }
}
let ValidBee = new Validate();
exports.ValidBee = ValidBee;
