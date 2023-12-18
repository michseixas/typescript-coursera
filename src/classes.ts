class Greeter{
    greetingMessage: string
    nombre: string
    private edad: number
    constructor(message: string, atributo2: string, atributo3: number){
        this.greetingMessage = message
        this.nombre = atributo2
        this.edad = atributo3
    }
    greet(){
        return "Hello " + this.greetingMessage + " by " + this.nombre + " (" + this.edad + ")"
    }
    bye() {
        return "Goodbye " + this.nombre
    }
    birthday(){
        this.edad += 1
        return this.nombre + " is now 1 year older"
    }
    cualeslaedad() {
        return this.edad
    }
}

let greeter = new Greeter("How are you?","javo", 46)
let bo = new Greeter("meeeeew","bo", 12)
let mich = new Greeter("bridezilla","Mich", 44)

console.log(greeter.greet());
console.log(greeter.bye());
console.log(greeter.birthday())
console.log(greeter.greet());
console.log(greeter.birthday())
console.log(greeter.birthday())
console.log(greeter.birthday())
console.log(greeter.birthday())
console.log(greeter.birthday())
console.log(greeter.greet());
//el año va quedando en la memoria del objeto y va sumando sumando sumando...

console.log(bo.greet());
console.log(mich.greet());
mich.birthday() //llama a la función que suma un año
console.log(mich.greet());


//sobreescribe el nombre del objeto Bo
bo.nombre = "bochimu"
console.log(bo.nombre)
console.log(bo.cualeslaedad());

// class Animal {
//     name: string
//     constructor(theName: string){
//         this.name = theName
//     }
//     move(distanceInMeters: number = 0){
//         console.log("moved " + distanceInMeters + " meters")
//     }
// }

// class Snake extends Animal {
//     constructor(name: string){
//         super(name)
//     }
//     move(distanceInMeters = 5){ //5 considering the length of the snake =D
//         super.move(distanceInMeters)
//     }
// }

// let snake = new Snake("Cobra Kai")
// console.log(snake.move(10));