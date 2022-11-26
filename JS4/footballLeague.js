function league(input) {
    let stadiumCapacity = Number(input[0]);
    let numFans = Number(input[1]);
    let allCapacity = 0;
    let percentA = 0;
    let percentB = 0;
    let percentV = 0;
    let percentG = 0;

    for (let i = 2; i < input.length; i++) {
        let fans = input[i];
        if (fans == "A") {
            percentA++;
        } else if (fans == "B") {
            percentB++;
        } else if (fans == "V")  {
            percentV++;
        } else if (fans == "G") {
            percentG++;
        }

    }
    percentA = percentA / numFans * 100;
    percentB = percentB / numFans * 100;
    percentV = percentV / numFans * 100;
    percentG = percentG / numFans * 100;

    allCapacity = numFans / stadiumCapacity * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    console.log(`${allCapacity.toFixed(2)}%`);
}
league([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);