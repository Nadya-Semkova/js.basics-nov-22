function intervals(input) {
    let numMoves = Number(input[0]);
    let points = 0;
    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
    let percentInvalid = 0;

    for (let i = 1; i < input.length; i++) {
        let num = Number(input[i]);
        if (num <= 9 && num >= 0) {
            points = points + num * 0.2
            percent1++
        } else if (num >= 10 && num <= 19) {
            points = points + num * 0.3;
            percent2++
        } else if (num >= 20 && num <= 29) {
            points = points + num * 0.4;
            percent3++
        } else if (num >= 30 && num <= 39) {
            points = points + 50;
            percent4++
        } else if (num >= 40 && num <= 50) {
            points = points + 100;
            percent5++
        }

        if ((num > 50) || (num < 0)) {
             points = points / 2;
             percentInvalid++
        }
    }


     percent1 = percent1 / numMoves * 100;
     percent2 = percent2 / numMoves * 100;
     percent3 = percent3 / numMoves * 100;
     percent4 = percent4 / numMoves * 100;
     percent5 = percent5 / numMoves * 100;
    percentInvalid = percentInvalid / numMoves * 100;

    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalid.toFixed(2)}%`);


}
intervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20,
    ]);