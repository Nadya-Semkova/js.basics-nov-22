function shopping(input) {

    let budget = Number(input[0]);
    let numberN = Number(input[1]);
    let numberM = Number(input[2]);
    let numberP = Number(input[3]);

    let priceN = numberN * 250;
    let priceM = numberM * (priceN * 0.35);
    let priceP =  numberP * (priceN * 0.1);

    let totalPrice = priceN + priceM + priceP;
   
    if (numberN > numberM) {
        totalPrice = totalPrice * 0.85;
    }

    if (budget >= totalPrice) {
        let budgetLeft = budget - totalPrice;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else {
        let budgetNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["920.45",

"3",

"1",

"1"]);