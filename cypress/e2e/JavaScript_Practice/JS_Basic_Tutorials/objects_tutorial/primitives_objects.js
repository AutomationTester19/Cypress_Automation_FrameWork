// NN BB SS U

// Below 7 are the primitive Data Types
let a =null;
let b=10;
let c=true;
let d=BigInt("567")
let e="Kabira";
let f=Symbol("This is Symbol Variable");
let g=undefined;
let h=d+BigInt("777")

console.log(a,b,c,d,e,f,g,h);
console.log(typeof d); // to know the specific data type using typeof

// Objects are the non-primitive data types

const emp = {
    "empName" : "Kabira",
    "empRole" : "SDET"
}

console.log(emp["empName"]+" ---> "+ emp["empRole"]);