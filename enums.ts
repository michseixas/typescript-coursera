//give a more friendly name to a set of numeric values. Enum allows developers to define a set of named constants
enum Colors {
    RED,
    BLUE,
    GREEN
}

let myColor: Colors = Colors.GREEN


//----

enum Days {
    MONDAY, 
    TUESDAY,
    WEDNESDAY, 
    THURSDAY, 
    FRIDAY,
    SATURDAY, 
    SUNDAY
}

const getDailyMessage = (day: Days) => {
    switch (day) {
        case Days.MONDAY:
            return "Get a coffee e mãos à obra!"
        case Days.FRIDAY:
            return "Sextou!!"    
    }
}
//check the enums.js to see that typescript has assigned a numeric value to each variable
console.log(Days);