function BasketballEquipment(input) {
    let AnnualTax = Number(input[0]);
    let Shoes = AnnualTax - (AnnualTax * 0.4);
    let Clothes = Shoes - (Shoes * 0.2);
    let BasketBall = Clothes / 4;
    let Accessories = BasketBall / 5;

    console.log(AnnualTax + Shoes + Clothes + BasketBall + Accessories);
}
BasketballEquipment(["365"]);