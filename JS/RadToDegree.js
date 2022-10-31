// function convertDegreeToRad([degree]) {
//     console.log("Degree = "  + Math.round(( degree * 180 / Math.PI)));
// }
// convertDegreeToRad([3.1416]);

function convertRadToDegree(input) {
    let Rad = Number(input[0]);
    let Degree = Rad * 180 / Math.PI;
    console.log(Degree);
}
convertRadToDegree(["3.1416"]);