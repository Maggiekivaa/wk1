function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter your basic salary:"));
    let benefits = parseFloat(prompt("Enter your benefits:"));
    let grossSalary = basicSalary + benefits;
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1; 
    } else if (grossSalary <= 40000) {
        paye = grossSalary * 0.15; 
    } else if (grossSalary <= 60000) {
        paye = grossSalary * 0.2; 
    } else if (grossSalary <= 80000) {
        paye = grossSalary * 0.25; 
    } else {
        paye = grossSalary * 0.3; 
    }

    
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1050;
    } else {
        nhif = 1200; 
    }
    let nssf = grossSalary * 0.06;
    let netSalary = grossSalary - (paye + nhif + nssf);
    alert("Gross Salary: KES " + grossSalary.toFixed(2));
    alert("PAYE Tax Deduction: KES " + paye.toFixed(2));
    alert("NHIF Deduction: KES " + nhif.toFixed(2));
    alert("NSSF Deduction: KES " + nssf.toFixed(2));
    alert("Net Salary: KES " + netSalary.toFixed(2));
}
calculateNetSalary();