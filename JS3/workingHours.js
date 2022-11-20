function workingH(input){
    let hour = Number(input[0]);
    let dayOfWeek = input[1];

    if (hour >= 10 && hour <= 18) {
        if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday"  || dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
            console.log("open");
        } else {
            console.log("closed");
        }
    }
}

workingH(["11", "Sunday"]);


// function workingH(input) {
//     let hour = Number(input[0]);
//     let dayOfWeek = input[1];

//     if (hour >= 10 && hour <= 18) {
//         switch (dayOfWeek) {
//             case "Monday":
//             case "Tuesday":
//             case "Wednesday":
//             case "Thursday":
//             case "Friday":
//             case "Saturday":
//                 console.log("open");
//                 break;
//             default: console.log("closed");
//             break;
//         }

//     } else {
//         console.log("closed");
//     }
// }
// workingH(["11", "Sunday"]);