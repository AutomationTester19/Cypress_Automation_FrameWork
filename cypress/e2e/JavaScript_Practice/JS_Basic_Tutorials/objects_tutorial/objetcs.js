const employee = {

    empName: "Digvijay Anney",
    role: "SDET",
    age: 31
}

// accessing the employee object using property key

console.log(employee.age)

// or using object employee

console.log(employee["empName"])

// we can declare functions inside the objects

const user = {

    firstName: "Digvijay",
    lastName: "Anney",
    age: 31,
    getFullName: function(){
        return "Getting Full Name ---> " + this.firstName + " " +this.lastName;
    }
}

let test = user.getFullName();

console.log(test)

// calling function name without () , it return the function defination 

let test1 = user.getFullName;

console.log(test1)