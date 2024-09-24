
// Define wage per hour, full day hours, half day hours, and part-time hours
let wagePerHour = 20;
let fullDay = 8;
let halfDay = 4;
let partTime = 8;
let totalWorkingDays = 20;

console.log("===== WELCOME TO EMPLOYEE WAGE COMPUTATION ======");
console.log("");

// Generate a random number between 0 and 3
let empCheck = Math.floor(Math.random() * 4);

// Initialize daily wage
let dailyWage = 0;

// Check if the employee is present, absent, came for a half day, or is a part-time employee
if (empCheck === 0) {
    console.log("Employee is Present");
    dailyWage = wagePerHour * fullDay;
} else if (empCheck === 1) {
    console.log("Employee is Absent");
    dailyWage = 0;
} else if (empCheck === 2) {
    console.log("Employee came for Half Day");
    dailyWage = wagePerHour * halfDay;
} else {
    console.log("Employee is Part-Time");
    dailyWage = wagePerHour * partTime;
}

console.log("");
console.log("The daily wage of Employee is : " + dailyWage);
console.log("");

// Calculate the monthly wage
let monthlyWage = dailyWage * totalWorkingDays;
console.log("The monthly wage of Employee is : " + monthlyWage);
console.log("");
