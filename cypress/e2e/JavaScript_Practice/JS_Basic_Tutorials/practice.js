/*
   1. Practice Set 1
*/

let a = "kabira";
let b = 19;

console.log(a+b)

console.log(typeof (a+b))

const bike = {

    model : "CB-160",
    mileage : 40,
    color : "Black-Green"
}

console.log(bike['model'])

// adding dynamic objects at run time

bike['price'] = 100090;
console.log(bike)
// updating the values in objects
bike['mileage'] = 35;
console.log(bike)