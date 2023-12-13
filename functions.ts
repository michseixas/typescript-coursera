const sum = (num: number, num2: number): number => { 

    return num + num2
}

//---------

const sum2 = (num: string | number, num2: string | number) : number => {
    typeof num == 'string' ? num = parseInt(num) : null
    typeof num2 == 'string' ? num2 = parseInt(num2) : null
    return num + num2
}
console.log(sum2(42, "42"));

//-------
//if there is any type of return at all and you said that you are expecting "void" as a return, there will always be an error. 
const sum3 = (num: string | number, num2: string | number) : void => {
 console.log("error in the system")
}
console.log(sum2(42, "42"));

//not much useful:
const n:null = null
const u:undefined = undefined