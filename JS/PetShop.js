function calculatePetShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number (input[1]);
    let sum = 2.50 * dogFood + 4 * catFood;
    console.log(sum);
}
calculatePetShop(["5", "4"]);