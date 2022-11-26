function tennisRanklist(input) {
    let numTournaments = Number(input[0]);
    let startingScore = Number(input[1]);
    let totalPoints = startingScore;
    let wins = 0;


    for (let i = 2; i <= numTournaments+1; i++) {
        let stage = input[i];
        if (stage === "W") {
            totalPoints += 2000;
            wins++;
        } else if (stage === "F") {
            totalPoints += 1200;
        } else if (stage === "SF") {
            totalPoints += 720;
        }
    }

        let averagePoints = (totalPoints - startingScore) / numTournaments;
        let wonTournaments = (wins / numTournaments) * 100;

        console.log(`Final points: ${totalPoints}`);
        console.log(`Average points: ${Math.trunc(averagePoints)}`);
        console.log(`${wonTournaments.toFixed(2)}%`);
}
tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"]);