
// Define wage per hour, full day hours, half day hours, and part-time hours
let wagePerHour = 20;
let fullDay = 8;
let halfDay = 4;
let partTime = 8;
let totalWorkingDays = 20;
let maxWorkingHours = 100;

// Initialize total working hours and days
let totalHours = 0;
let totalDays = 0;
let totalWage = 0;

console.log("===== WELCOME TO EMPLOYEE WAGE COMPUTATION ======");
console.log("");

// Function to calculate daily wage based on employee status
function calculateDailyWage(empCheck) {
    switch (empCheck) {
        case 0:
            console.log("Employee is Present");
            return wagePerHour * fullDay;
        case 1:
            console.log("Employee is Absent");
            return 0;
        case 2:
            console.log("Employee came for Half Day");
            return wagePerHour * halfDay;
        case 3:
            console.log("Employee is Part-Time");
            return wagePerHour * partTime;
        default:
            console.log("Invalid employee status");
            return 0;
    }
}

// Loop until total working hours or days condition is met
while (totalHours < maxWorkingHours && totalDays < totalWorkingDays) {
    let empCheck = Math.floor(Math.random() * 4);
    let dailyWage = calculateDailyWage(empCheck);
    totalWage += dailyWage;

    // Update total hours based on employee status
    if (empCheck === 0) {
        totalHours += fullDay;
    } else if (empCheck === 2) {
        totalHours += halfDay;
    } else if (empCheck === 3) {
        totalHours += partTime;
    }

    totalDays++;
    console.log("");
    console.log("Day " + totalDays + ": Daily Wage = " + dailyWage + ", Total Hours = " + totalHours);
    console.log("");
}

console.log("Total Wage for the month: " + totalWage);
console.log("Total Working Days: " + totalDays);
console.log("Total Working Hours: " + totalHours);
