const cars = ["BMW","AUDI","SWIFT"];

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])

console.log(cars.length)

// sort the array using sort method

console.log(cars.sort())

const values = [2,9,8,1,3,5,6,10,4,7];

console.log("Sorting Integers")

console.log(values.sort())

// creating empty array

const person = ["Kabira","Tom","Harry"];

console.log(person.length)

// We can add element to array by

person.push("Peter");

console.log(person.length)

/**
 * JavaScript doesn't support Associate arrays ( empty defined arrays)
 * Arrays with named indexes are called Associate arrays or hashes
 * 
*/ 
const empList = []
//empList = ["Senior","Junior","Intern"];
//console.log(empList.length)

/**
 * In JavaScript there is pre-defined constructor called new Array()
 * The new Keyword can produce some unexpected results
 */
const empList2 = new Array();
//empList2 = ("Senior","Junior","Interns");

//console.log(empList2.length)

var numbers = new Array(1,2,3);
//console.log(numbers.length)

/**
 * By using new KeyWord , Array cannot be defined
 */

/**
 *  1. To Use Strings in array, always create objects or named indexes
 *  2. To Use Integers or any other data type, always create arrays or numbered indexes
 */

// typeof returns whether array is an object or not and instanceof return whether it is true of false

const fruits = ["Lemon","Apple","WaterMelon"];
let type = typeof fruits;
console.log(type)

const val = [1,9,10,8]
let check = typeof val;
console.log(check)

// iterating arrays

fruits.forEach(element => {
    console.log(element)
});

// Array Methods

/**
 *  1. pop   -->  removes the last element from array
 *  2. push  -->  adds new element to the array
 *  3. shift -->  removes the first element from array and moves other element to lower indexes
 *  4. unshift --> adds the new element to starting of the index and moves other element to lowe indexes
 *  5. delete -->  to delete specific element from array 
 */

console.log("before using pop method");
console.log(fruits); 
fruits.pop();
console.log("after using pop method")
console.log(fruits);

fruits.push("Water Melon");

console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift("Orange");
console.log(fruits);

// 

delete fruits[0]

console.log(fruits);



// concat arrays always return new array

const s1 = [1,2,3];
const s2 = [4,5,6];

const s3 = s1.concat(s2);
console.log(s3)


/**
 * splice & slice methods in array
 * 
 * 1. splice method -- 
 *      parameter1 - in which index new element should add
 *      parameter2 - which element should be removed eg : if it is 0 then no element will be removed else specificied index element will removed
 *      parameter3 - new element value
 *    If splice method contains we can remove the elements by specifing from start index and end index
 * 2. slice method --
 *     will display the  elements from specific index
*/
const names = ["Peter","Kabira","Tom"];

console.log(names)

names.splice(1,0,"Matt")

console.log(names)

names.splice(0,1)

console.log(names)

const a1 = [10,20,30,40,50];


console.log(a1.slice(2))