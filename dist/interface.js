"use strict";
//set the shape os an object as we expect it to be
const showState = (person) => {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
let bochimu = {
    name: "Bochimu Seixas",
    isHungry: true
};
console.log(showState(bochimu));
