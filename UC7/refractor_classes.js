
class EmployeeWageComputation {
    // Class variables
    static wagePerHour = 20;
    static fullDay = 8;
    static halfDay = 4;
    static partTime = 8;
    static totalWorkingDays = 20;
    static maxWorkingHours = 100;

    // Method to calculate daily wage based on employee status
    static calculateDailyWage(empCheck) {
        switch (empCheck) {
            case 0:
                console.log("Employee is Present");
                return this.wagePerHour * this.fullDay;
            case 1:
                console.log("Employee is Absent");
                return 0;
            case 2:
                console.log("Employee came for Half Day");
                return this.wagePerHour * this.halfDay;
            case 3:
                console.log("Employee is Part-Time");
                return this.wagePerHour * this.partTime;
            default:
                console.log("Invalid employee status");
                return 0;
        }
    }

    // Method to compute the total wage for the month
    static computeMonthlyWage() {
        let totalHours = 0;
        let totalDays = 0;
        let totalWage = 0;

        console.log("===== WELCOME TO EMPLOYEE WAGE COMPUTATION ======");
        console.log("");

        while (totalHours < this.maxWorkingHours && totalDays < this.totalWorkingDays) {
            let empCheck = Math.floor(Math.random() * 4);
            let dailyWage = this.calculateDailyWage(empCheck);
            totalWage += dailyWage;

            // Update total hours based on employee status
            switch (empCheck) {
                case 0:
                    totalHours += this.fullDay;
                    break;
                case 2:
                    totalHours += this.halfDay;
                    break;
                case 3:
                    totalHours += this.partTime;
                    break;
            }

            totalDays++;
            console.log("");
            console.log("Day " + totalDays + ": Daily Wage = " + dailyWage + ", Total Hours = " + totalHours);
            console.log("");
        }

        console.log("Total Wage for the month: " + totalWage);
        console.log("Total Working Days: " + totalDays);
        console.log("Total Working Hours: " + totalHours);
    }
}

// Call the method to compute the monthly wage
EmployeeWageComputation.computeMonthlyWage();
