//set the shape os an object as we expect it to be
var showState = function (person) {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
var bochimu = {
    name: "Bochimu Seixas",
    isHungry: true
};
console.log(showState(bochimu));
