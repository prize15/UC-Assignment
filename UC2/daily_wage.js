
// Define wage per hour and full day hours
let wagePerHour = 20;
let fullDay = 8;
let halfDay = 4;

console.log("===== WELCOME TO EMPLOYEE WAGE COMPUTATION ======");
console.log("");

// Generate a random number between 0 and 2
let empCheck = Math.floor(Math.random() * 3);

// Check if the employee is present, absent, or came for a half day
if (empCheck === 0) {
    console.log("Employee is Present");
    console.log("");
    console.log("The daily wage of Employee is : " + (wagePerHour * fullDay));
    console.log("");
} else if (empCheck === 1) {
    console.log("Employee is Absent");
    console.log("");
    console.log("The daily wage of Employee is : 0");
    console.log("");
} else {
    console.log("Employee came for Half Day");
    console.log("");
    console.log("The daily wage of Employee is : " + (wagePerHour * halfDay));
    console.log("");
}
