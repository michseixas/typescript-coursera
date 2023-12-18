"use strict";
const sum = (num, num2) => {
    return num + num2;
};
//---------
const sum2 = (num, num2) => {
    typeof num == 'string' ? num = parseInt(num) : null;
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    return num + num2;
};
console.log(sum2(42, "42"));
//-------
//if there is any type of return at all and you said that you are expecting "void" as a return, there will always be an error. 
const sum3 = (num, num2) => {
    console.log("error in the system");
};
console.log(sum2(42, "42"));
//not much useful:
const n = null;
const u = undefined;
