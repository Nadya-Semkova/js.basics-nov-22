function Harvest(input) {
    let X = Number(input[0]);
    let Y = Number(input[1]);
    let Z = Number(input[2]);
    let numWorkers = Number(input[3]);

    let totalGrape = X * Y;
    let wine = (totalGrape * 0.4) / 2.5;

    if (wine < Z) {
        let wineNeeded = Z - wine;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    } else if (wine >= Z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        let wineLeft = wine - Z;
        let wineForWorker = wineLeft / numWorkers;
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineForWorker)} liters per person.`);
    }
}
Harvest(["1020", "1.5", "425", "4"]);