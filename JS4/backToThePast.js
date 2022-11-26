function back(input) {
    let moneyInherited = Number(input[0]);
    let yearLiving = Number(input[1]);
    let moneySpent = 0;
    let yearsOld = 0;

    for (i = 1800; i <= yearLiving; i++) {
        yearsOld = i + 18 - 1800;
        if (i % 2 === 0) {
            moneySpent = moneySpent + 12000;
        } else {
            moneySpent = moneySpent + 12000 + 50 * yearsOld;
        }

    }
    if (moneyInherited >= moneySpent) {
        let money = moneyInherited - moneySpent;
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);

    } else {
        let moneyNeeded = moneySpent - moneyInherited;
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }
}
back(["100000", "1808"]);
