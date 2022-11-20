function swim(input) {
    let Record = Number(input[0]);
    let Distance = Number(input[1]);
    let Time1m = Number(input[2]);

    let swimTime = Distance * Time1m;
    let delayedTime = Math.floor(Distance / 15) * 12.5;
    let totalTime = swimTime + delayedTime;

    if (totalTime < Record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if (totalTime >= Record) {
        let secondsNeeded = totalTime - Record;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }

}
swim(["55555.67", "3017", "5.03"]);
