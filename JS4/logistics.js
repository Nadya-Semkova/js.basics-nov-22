function logistics(input) {
    let numCargo = Number(input[0]);
    let tons = 0;
    let price1 = 0;
    let price2 = 0;
    let price3 = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;
    
    for (let i = 1; i <= numCargo; i++) {
        tons = Number(input[i]);

        if (tons <= 3) {
            price1 = price1 + (tons * 200);
            microbus += tons;
        } else if (tons >= 4 && tons <= 11) {
            price2 = price2 + (tons * 175);
            truck += tons;
        } else if (tons >= 12) {
            price3 = price3 + (tons * 120);
            train += tons;
        }
    }
    let totalTons = microbus + truck + train;
    let averagePrice = (price1 + price2 + price3) / totalTons;
    let percentMicrobus = microbus / totalTons * 100;
    let percentTruck = truck / totalTons * 100;
    let percentTrain = train / totalTons * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${percentMicrobus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);
}

logistics([4, 1, 5, 16, 3]);