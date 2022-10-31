// function convertUSDtoBGN([BGN]) {
//     console.log("BGN = " + (BGN * 1.79549).toFixed(2));

// }
// convertUSDtoBGN([20]);


function convertUSDtoBGN(input) {
    let USD = Number(input[0]);
    let BGN = USD * 1.7954;
    console.log(BGN);
}
convertUSDtoBGN(["22"]);