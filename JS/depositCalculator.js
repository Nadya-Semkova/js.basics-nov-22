function depositCalculator(input) {
    let depositedSum = Number(input[0]);
    let MonthsTime = Number(input[1]);
    let interest = Number(input[2]);
    let increasedDecimal = interest / 100;
    
    let sum = depositedSum + MonthsTime * ((depositedSum * increasedDecimal) / 12);
    

    console.log(sum);

}

depositCalculator(["200", "3", "5.7"])