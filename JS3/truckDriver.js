function truckDriver(input) {
    let season = input[0];
    let kmMonth = Number(input[1]);
    let sum;

    if (season === "Spring" || season === "Autumn") {
        if (kmMonth <= 5000) {
            sum = (kmMonth * 0.75) * 4;

        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            sum = (kmMonth * 0.95) * 4;
        } else if (kmMonth > 10000 & kmMonth <= 20000) {
            sum = (kmMonth * 1.45) * 4;
        }
    } else if (season === "Summer") {
        if (kmMonth <= 5000) {
            sum = (kmMonth * 0.90) * 4;
        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            sum = (kmMonth * 1.10) * 4;
        } else if (kmMonth > 10000 && kmMonth <= 20000) {
            sum = (kmMonth * 1.45) * 4;
        }
    } else if (season === "Winter") {
        if (kmMonth <= 5000) {
            sum = (kmMonth * 1.05) * 4;
        } else if (kmMonth > 5000 && kmMonth <= 10000) {
            sum = (kmMonth * 1.25) * 4;
        } else if (kmMonth > 10000 && kmMonth <= 20000) {
            sum = (kmMonth * 1.45) * 4;
        }
    }
    let taxes = sum * 0.90;
    console.log(taxes.toFixed(2));

}
truckDriver(["Spring", "1600"]);