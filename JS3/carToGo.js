function carToGo(input) {
let budget = Number(input[0]);
let season = input[1];

let classType;
let carType;

if (budget <= 100) {   
    classType = "Economy class";
    if (season === "Summer") {
        carType = "Cabrio";
        budget = budget * 0.35;

    } else if (season === "Winter") {
        carType = "Jeep";
        budget = budget * 0.65;
    }
} else if (budget > 100 && budget <= 500) {
    classType = "Compact class";
    if (season === "Summer") {
        carType = "Cabrio";
        budget = budget * 0.45;
    } else if (season === "Winter") {
        carType = "Jeep";
        budget = budget * 0.80;
    }
} else if (budget > 500) {
    classType = "Luxury class";
    if (season === "Summer" || season === "Winter") {
        carType = "Jeep";
        budget = budget * 0.90;
    }
}
console.log(`${classType}`);
console.log(`${carType} - ${budget.toFixed(2)}`)

}
carToGo (["70.50", "Winter"]);