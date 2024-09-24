
// Define wage per hour, full day hours, half day hours, and part-time hours
let wagePerHour = 20;
let fullDay = 8;
let halfDay = 4;
let partTime = 8;

console.log("===== WELCOME TO EMPLOYEE WAGE COMPUTATION ======");
console.log("");

// Generate a random number between 0 and 3
let empCheck = Math.floor(Math.random() * 4);

// Use switch case to determine the employee's status
switch (empCheck) {
    case 0:
        console.log("Employee is Present");
        console.log("");
        console.log("The daily wage of Employee is : " + (wagePerHour * fullDay));
        console.log("");
        break;
    case 1:
        console.log("Employee is Absent");
        console.log("");
        console.log("The daily wage of Employee is : 0");
        console.log("");
        break;
    case 2:
        console.log("Employee came for Half Day");
        console.log("");
        console.log("The daily wage of Employee is : " + (wagePerHour * halfDay));
        console.log("");
        break;
    case 3:
        console.log("Employee is Part-Time");
        console.log("");
        console.log("The daily wage of Employee is : " + (wagePerHour * partTime));
        console.log("");
        break;
    default:
        console.log("Invalid employee status");
        console.log("");
        break;
}
