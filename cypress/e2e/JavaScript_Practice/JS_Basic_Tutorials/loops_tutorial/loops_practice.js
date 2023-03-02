// for loops

for(let i=0;i<=10;i++){
    console.log(i)
}

// for in loop using objects

let employeeMarks = {

    "Tom"    : 68,
    "Peter"  : 79,
    "Mark"   : 82,
    "Kabira" : 88
}
// get only keys from objects
for(let key in employeeMarks){
    console.log(key)
}

for(let marks in employeeMarks){
    console.log("Employee Name : "+marks+" ---> "+employeeMarks[marks])
}

// while loops
let i=0;
let n=5;

while(i<n){
    console.log(i);
    i++;
}

console.log("#### DO WHILE LOOPS")
// do-while -> it will execute atleast one time
let a=1;
let b=10;
do{
 console.log(a)
 a++;
}
while(a<b)


// do-while

