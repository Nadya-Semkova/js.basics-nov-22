function sleepyCat(input) {
    let numDaysOff = Number(input[0]);

    let daysWork = 365 - numDaysOff;
    let playTime = daysWork * 63 + numDaysOff * 127;

    if (playTime > 30000) {
        let difference = playTime - 30000;
       let  differenceHour = Math.floor(difference / 60); 
       let differenceMinutes = difference % 60;
        console.log(`Tom will run away`);
        console.log(`${differenceHour} hours and ${differenceMinutes} minutes more for play`);
    } else {
        let difference = 30000 - playTime;
        let differenceH = Math.floor(difference / 60);
        let differenceM = difference % 60;
        console.log(`Tom sleeps well`);
        console.log(`${differenceH} hours and ${differenceM} minutes less for play`);

    }
}
sleepyCat(["113"]);
