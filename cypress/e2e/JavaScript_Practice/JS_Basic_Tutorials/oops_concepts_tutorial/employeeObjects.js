const emp = {
        
    empID : 101,
    empName : "Kabira",
    empSalary: 20000,
    getDetails(){
        console.log("employee details -->",this.empID + "--->" +this.empName + "--->" +this.empSalary);
    }
}
console.log(emp)
emp.empSection = "A"; // dynamice objects --> we can add objects at run time
console.log(emp)
emp.getDetails()

