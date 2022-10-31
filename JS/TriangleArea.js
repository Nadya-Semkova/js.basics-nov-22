// function calculateTriangleArea([arg1, arg2]) {
//     let a = parseFloat(arg1);
//     let h = parseFloat(arg2);
//     let area = a * h / 2;

//     console.log("Triangle Area = " + a * h / 2);
//     area.toFixed(2);
// }
// calculateTriangleArea([7.75, 8.45]);

function TriangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);

    let area = (a * h / 2).toFixed(2);
    console.log(area);
    
}
TriangleArea(["20", "30"])