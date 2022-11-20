function race(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trail = input[2];
    let tax1 = 0;
    let tax2 = 0;
    let totalTax = 0;
    let taxAfterExpenses = 0;
    
    
    if (trail === "trail") {
        tax1 = juniors * 5.50;
        tax2 = seniors * 7;
    } else if (trail === "cross-country") {
        tax1 = juniors * 8;
        tax2 = seniors * 9.50;
        if (juniors + seniors >= 50) {
        tax1 = tax1 * 0.75;
        tax2 = tax2 * 0.75;
        }
    } else if (trail === "downhill") {
        tax1 = juniors * 12.25;
        tax2 = seniors * 13.75;
    } else if (trail === "road") {
        tax1 = juniors * 20;
        tax2 = seniors * 21.50;
    }
    totalTax = tax1 + tax2;
     taxAfterExpenses = totalTax * 0.95;
     console.log(`${taxAfterExpenses.toFixed(2)}`);
    
}
race(["30", "25", "cross-country"]);