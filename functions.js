var sum = function (num, num2) {
    return num + num2;
};
//---------
var sum2 = function (num, num2) {
    typeof num == 'string' ? num = parseInt(num) : null;
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    return num + num2;
};
console.log(sum2(42, "42"));
//-------
//if there is any type of return at all and you said that you are expecting "void" as a return, there will always be an error. 
var sum3 = function (num, num2) {
    console.log("error in the system");
};
console.log(sum2(42, "42"));
//not much useful:
var n = null;
var u = undefined;
