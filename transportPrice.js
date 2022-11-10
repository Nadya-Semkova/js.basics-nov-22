function transport(input) {
    let n = Number(input[0]);
    let word = input[1];

    let Taxi = 0;
    let Bus = 0;
    let Train = 0;

    if (word == "day") {
        Taxi = 0.70 + 0.79 * n;
    } else {
        Taxi = 0.70 + 0.90 * n;
    }

    if (n >= 100) {
        Train = 0.06 * n;
        console.log(Train.toFixed(2));
    } else if (n >= 20) {
        Bus = 0.09 * n;
        console.log(Bus.toFixed(2));
    } else {
        console.log(Taxi.toFixed(2));
        
    }
}
transport(["25", "day"]);