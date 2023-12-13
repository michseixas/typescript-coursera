//set the shape os an object as we expect it to be

interface PersonState {
    name: string;
    isHungry: boolean;
}

const showState = (person: PersonState) => {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry")
}

let bochimu: PersonState = {
    name: "Bochimu Seixas",
    isHungry: true
}

console.log(showState(bochimu));