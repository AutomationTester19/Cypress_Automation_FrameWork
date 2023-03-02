let age;

if(age<0){
    console.log("You cannot drive")
}
else if(age<18 && age>=9){
    console.log("Since You are age is less then 18 so you cannot drive the vechile now");
}

else {
    console.log("You can driver the now, since you are 18")
}


// Switch Case
let fruit = "banana";
switch(fruit) {
 case 'apple':
    console.log("Fruit is Apple");
    break;
 case 'banana':
    console.log("Fruit is Banana");
    break;
}

// ternary operator

let x = 10;
let y = x > 18 ? "Adult Age" : "Teen Age"
console.log(y)