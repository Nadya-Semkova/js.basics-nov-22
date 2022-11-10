function movie(input) {
    let budget = Number(input[0]);
    let numStatists = Number(input[1]);
    let priceClothing = Number(input[2]);

    let decor = budget * 0.1;

    if (numStatists > 150) {
        priceClothing = priceClothing * 0.9;
    }

    let totalClothing = priceClothing * numStatists;
    let totalSum = totalClothing + decor;

    if (totalSum > budget) {
        let neededMoney = totalSum - budget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    } else if (totalSum <= budget) {
        let leftMoney = budget - totalSum;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }

}
movie(["15437.62",

"186",

"57.99"]);
