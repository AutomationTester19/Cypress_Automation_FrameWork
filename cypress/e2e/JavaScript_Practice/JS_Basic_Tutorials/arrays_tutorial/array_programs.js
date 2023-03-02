const marks = [90,89,78,56,76,65];
console.log(marks)
console.log("Length of array ---> " +marks.length)
marks[3] = 84 // updating existing value
marks[6] = 92 // adding new value
console.log(marks)
console.log("New Array Length of array ---> " +marks.length)

// join method for Arrays
let fruits = ['Apple','Banana','Custard Apple'];
let f = fruits.join(" || ");
console.log(f,", Typeof f --->" +typeof f)

 // pop removes the last element from array

let new_fruits = fruits.pop();
console.log(new_fruits)
console.log(fruits)

// push add the new element to the array

let val = fruits.push("Mango");
console.log(fruits,val)

 // shift removes the first element from array and returns the removed element

let removed_fruit = fruits.shift();
console.log(fruits,removed_fruit)

// unshift adds the new element to array and returns the length of an array 
let add_new_element = fruits.unshift("Orange");
console.log(add_new_element)


// delete the array
let nums = [1,2,3,4,5];
console.log(nums.length);
delete nums[0];
console.log(nums.length);

// concat array
let a1=[10,20,30];
let a2=[40,50,60];
let a3=[70,80,90];

let newArray = a1.concat(a2,a3);
console.log(newArray)

// using sort we can sort using alphabetically only , we cannot sort using ascending or descending

console.log("sorting the array ---> " +newArray.sort())


/* splice removes from the elements from start value(paramater 1)
 till specified index value(paramater 2), also parameter 3 
 we need to pass the new elements for the delete elements and splice return the
delete array */

let n1 = [20,40,60,80,100];
let n = n1.splice(1,3,30,50,70);
console.log(n)
console.log(n1)
// slice --> get specfic values in array from start and end indexes and which returns new array
let n2 = [19,13,17,35,43];
let new_array = n2.slice(1,3);
console.log(new_array)
console.log(n2)

// Map, filter & Reduce Methods on Arrays

/**
 * Map --> By performing some operations on each array element and returns the new array
 */
let b = [10,20,30];
let b1 = b.map((arrayElement,index,array) => {
    console.log(arrayElement,index,array)
   return arrayElement * 2;
})
console.log(b1)

/**
 * Filter the value by mentioning some condition and returns the new array
 */

let c = [5,10,15,16,24,25];
let c1 = c.filter((value) => {
   return value>15 && value<25;
})
console.log(c1)

/**
 * Reduce -> it reduces to single value and return the single value
 */
let s = [5,10,15,16,24,25];
let s1 = s.reduce((value1,value2) => {
   return value1+value2;
})
console.log(s1)