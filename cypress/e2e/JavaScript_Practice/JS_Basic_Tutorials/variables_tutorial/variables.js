console.log("##### USING LET KEYWORD DECLARING VARIABLES")


let a=10;
let user="kabira";
let flag=false
let char='c';

console.log(a)
console.log(user);
console.log(flag)
console.log(char);

// using dollor sign

console.log("##### USING DOLLAR SIGN DECLARING VARIABLES")

let $ = "test";
let $$ = 100;
let $$$ = 'a';

console.log($);
console.log($$);
console.log($$$);


// using underscore _

console.log("##### USING UNDERSCORE DECLARING VARIABLES")

let _vechile = "Benz";
let __x = 2;
let ___c='d';

console.log(_vechile);
console.log(__x);
console.log(___c);



{
    let a1 = 10;
    console.log(a1)
}
 // console.log(a1);   undefined

{
    let a1 = 20;
    console.log(a1);
}

// console.log(a1); // undefined
/**
 *  Accessing variables outside the block will through not defined error using let keyword
 * 
 */


{
    var b=30;
}
console.log(b); // valid

/**
 *  Using var keyworkd , variables can be accessed outside the block 
 */


 // HOISTING

 let carname = "benz";
 //let carname;

 console.log(carname);

 var user1 = "Kabira";
 var user1;

 console.log(user1);


 // USING CONST KEYWORD


 const car = {type:"Audi",model:"A1",price:190000};

 console.log("BEFORE ADDING/UPDATING THE CONSTANT OBJECTS");

 console.log(car)
 car.model = "A2"; // can change the property value

 car.price = 200000; // can change the property value

 car.owner = "Kabira"; // can add the value

 console.log("AFTER ADDING/UPDATING THE CONSTANT OBJECTS");

 console.log(car);


 const bike = {price:20000,model:"A1"}
 /**
  * bike = {price:100000,model:"A2"};
  * Objects cannot re-assigned or re-decarled using const keyword
*/
 console.log(bike)

 userName= "Digvijay";
 //const userName; // variables must be declared

 console.log(userName)