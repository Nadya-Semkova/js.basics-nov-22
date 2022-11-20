function toyShop(input) {
    let tripPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numDolls = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalSum = numPuzzles * 2.60 + numDolls * 3 + numBears * 4.10 + numMinions * 8.20 + numTrucks * 2;

    let totalToyNum = numPuzzles + numDolls + numBears + numMinions + numTrucks;

    if (totalToyNum >= 50) {
        totalSum = totalSum * 0.75;
    }
    let moneyAfterRent = totalSum * 0.90;

    if (moneyAfterRent >= tripPrice) {
        let moneyLeft = moneyAfterRent - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let insufficientMoney = tripPrice - moneyAfterRent;
        console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`);
    }
}
toyShop(["320", "8", "2", "5", "5", "1"]);