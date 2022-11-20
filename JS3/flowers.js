function flowers(input) {
    let chrysantemum = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];
    let bouquetPrice = 0;
    let numFlowers = chrysantemum + roses + tulips;
    let totalPrice = 0;
    
    if (season === "Spring" || season === "Summer") {
        chrysantemum = chrysantemum * 2.00;
        roses = roses * 4.10;
        tulips = tulips * 2.50;
        bouquetPrice = chrysantemum + roses + tulips;
        if (holiday === "Y") {
            bouquetPrice = bouquetPrice * 1.15;
        } else {
            bouquetPrice = bouquetPrice;
        }
        if (tulips > 7) {
            bouquetPrice = bouquetPrice * 0.95;
        }
        if (numFlowers > 20) {
            bouquetPrice = bouquetPrice * 0.80;
        }
    } else if (season === "Autumn" || season === "Winter") {
        chrysantemum = chrysantemum * 3.75;
        roses = roses * 4.50;
        tulips = tulips * 4.15;
        bouquetPrice = chrysantemum + roses + tulips;
        if (holiday === "Y") {
            bouquetPrice = bouquetPrice * 1.15;
        } else {
            bouquetPrice = bouquetPrice;
        }
        if (numFlowers > 20) {
            bouquetPrice = bouquetPrice * 0.80;
        }
        if (roses >= 10) {
            bouquetPrice = bouquetPrice * 0.90;
        }
    }
    totalPrice = bouquetPrice + 2;
    console.log(totalPrice.toFixed(2));
}
flowers(["10", "10", "10", "Autumn", "N"]);