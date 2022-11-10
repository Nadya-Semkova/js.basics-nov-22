function pets(input) {
    let numDays = Number(input[0]);
    let kgFood = Number(input[1]);
    let kgDogPerDay = Number(input[2]);
    let kgCatPerDay = Number(input[3]);
    let gTurtlePerDay = Number(input[4]);

    let totalDogFood = numDays * kgDogPerDay;
    let totalCatFood = numDays * kgCatPerDay;
    let totalTurtleFood = numDays * gTurtlePerDay / 1000;

    let AllFood = totalDogFood + totalCatFood + totalTurtleFood;

    if (kgFood >= AllFood) {
        let foodLeft = kgFood - AllFood;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`);
    } else if (AllFood > kgFood) {
        let foodNeeded = AllFood - kgFood;
        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}
pets(["2", "10", "1", "1", "1200"]);