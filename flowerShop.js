function flowerShop(input) {
    let numMagnolia = Number(input[0]);
    let numZyumbul = Number(input[1]);
    let numRoses = Number(input[2]);
    let numCacti = Number(input[3]);
    let presentPrice = Number(input[4]);

    let priceMagnolia = numMagnolia * 3.25;
    let priceZyumbul = numZyumbul * 4;
    let priceRoses = numRoses * 3.50;
    let priceCacti = numCacti * 8;
    let totalSum = priceMagnolia + priceZyumbul + priceRoses + priceCacti;
    let sumAfterTaxes = totalSum * 0.95;

    if (sumAfterTaxes >= presentPrice) {
        let leftMoney = sumAfterTaxes - presentPrice;
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else {
        let neededMoney = presentPrice - sumAfterTaxes;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }

}
flowerShop(["15", "7", "5", "10", "100"]);