function add15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTime = hour * 60 + minutes + 15;
    let totalHours = Math.floor(totalTime / 60);
    let leftMins = totalTime % 60;

    if (totalHours > 23) {
        totalHours = 0;
    }

    if (leftMins < 10) {
        console.log(`${totalHours}:0${leftMins}`);
    } else {
        console.log(`${totalHours}:${leftMins}`);
    }
}
add15Minutes(["0", "01"]);