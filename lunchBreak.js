function lunchBreak(input) {
    let movieName = input[0];
    let movieLength = Number(input[1]);
    let breakLength = Number(input[2]);
    let lunchTime = (1 / 8) * breakLength;
    let chillTime = (1 / 4) * breakLength;

    let takenTime = lunchTime + chillTime;
    let timeLeft = breakLength - takenTime;

    if (timeLeft >= movieLength) {
        let timeAfterWatching = timeLeft - movieLength;
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeAfterWatching)} minutes free time.`)
    } else {
        let neededTime = movieLength - timeLeft;
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(neededTime)} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);