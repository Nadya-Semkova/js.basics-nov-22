function Pool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);

    let pipe1 = P1 * H;
    let pipe2 = P2 * H;
    let totalpipes = pipe1 + pipe2;

    if (totalpipes <= V) {
        let filledPool = totalpipes / V * 100;
        let filledPipe1 = (pipe1 / totalpipes) * 100;
        let filledPipe2 = (pipe2 / totalpipes) * 100;
        console.log(`The pool is ${filledPool.toFixed(2)}% full. Pipe 1: ${filledPipe1.toFixed(2)}%. Pipe 2: ${filledPipe2.toFixed(2)}%.`);
    } else {
        let waterOut = totalpipes - V;
        console.log(`For ${H} hours the pool overflows with ${waterOut.toFixed(2)} liters.`);
    }

}
Pool(["100", "100", "100", "2.5"]);
