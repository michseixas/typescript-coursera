console.log("Hello World");

let myString: string
myString = "hello again just testing"
console.log(myString)

let myNum: number = 42
console.log(myNum)

let myBool : boolean  = true
console.log(myBool)

let myAny: any = []
console.log(myAny)

let strArr: string[] = ["0", "hi", "42"]
let numArr: number[] = ["22", "45", "42"]
let boolArr: boolean[] = [true, false, true, false]

console.log(strArr, numArr, boolArr)

let strNumTupple: [string, string, number] = ['hello', 'world', 42] // keep the amount, type and order

let myUnion: string | number
myUnion = 4
console.log(myUnion)