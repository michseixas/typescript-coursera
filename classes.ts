// class Greeter{
//     greeting: string
//     constructor(message: string){
//         this.greeting = message
//     }
//     greet(){
//         return "Hello " + this.greeting
//     }
// }

// let greeter = new Greeter("How are you?")
// console.log(greeter.greet());

class Animal {
    name: string
    constructor(theName: string){
        this.name = theName
    }
    move(distanceInMeters: number = 0){
        console.log("moved " + distanceInMeters + " meters")
    }
}

class Snake extends Animal {
    constructor(name: string){
        super(name)
    }
    move(distanceInMeters = 5){ //5 considering the length of the snake =D
        super.move(distanceInMeters)
    }
}

let snake = new Snake("Cobra Kai")
console.log(snake.move(10));