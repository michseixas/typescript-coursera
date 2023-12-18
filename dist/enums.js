"use strict";
//give a more friendly name to a set of numeric values. Enum allows developers to define a set of named constants
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
let myColor = Colors.GREEN;
//----
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
const getDailyMessage = (day) => {
    switch (day) {
        case Days.MONDAY:
            return "Get a coffee e mãos à obra!";
        case Days.FRIDAY:
            return "Sextou!!";
    }
};
//check the enums.js to see that typescript has assigned a numeric value to each variable
console.log(Days);
