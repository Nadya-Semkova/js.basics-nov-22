function FoodDelivery(input) {
    let Chicken = Number(input[0]) * 10.35;
    let Fish = Number(input[1]) * 12.40;
    let Vegeterian = Number(input[2]) * 8.15;

    let AllPrice = Chicken + Fish + Vegeterian;
    let DessertPrice = AllPrice * 0.20
    let TotalPrice = AllPrice + DessertPrice + 2.50;
    console.log(TotalPrice);

}
FoodDelivery(["2", "4", "3"]);