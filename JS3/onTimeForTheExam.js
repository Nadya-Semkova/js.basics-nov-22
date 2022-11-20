// function onTime(input) {
//     let hourExam = Number(input[0]);
//     let minExam = Number(input[1]);
//     let hourArrive = Number(input[2]);
//     let minArrive = Number(input[3]);
    
//     let examTime = (hourExam * 60) + minExam;
//     let arrivalTime = (hourArrive * 60) + minArrive;

//     let timeDifference = examTime - arrivalTime;
//     let earlyHour;
//     let earlyMin;
//     let lateHour;
//     let lateMin;

//     if (timeDifference >= 0 && timeDifference <= 30) {
//         if (timeDifference === 0) {
//             console.log("On time");
//         } else {
//             console.log("On time") ;
//             console.log(`${timeDifference} minutes before the start`);
//         }
//     } else if (timeDifference > 30) {
//         earlyHour = Math.floor(timeDifference / 60);
//         earlyMin = timeDifference % 60;
//         if (timeDifference > 30 && timeDifference <= 59) {
//             console.log("Early");
//             console.log(`${timeDifference} minutes before the start`);
//         } else {
//             if (earlyMin <= 10) {
//                 console.log("Early");
//                 console.log(`${earlyHour}:0${earlyMin} hours before the start`);
//             }
//         }

//     } else {
//         timeDifference = Math.abs(timeDifference);
//         lateHour = Math.floor(timeDifference / 60);
//         lateMin = timeDifference % 60;
//         if (timeDifference <= 59) {
//             console.log("Late");
//             console.log(`${timeDifference} minutes after the start`);
//         } else {
//             if (lateMin <= 10) {
//                 console.log("Late");
//                 console.log(`${lateHour}:0${lateMin} hours after the start`);
//             } else {
//                 console.log("Late");
//                 console.log(`${lateHour}:${lateMin} hours after the start`);
//             }
//         }
//     }
// }
// onTime(["11", "30", "8", "12"]);

function solve(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let totalExamMins = examHour * 60 + examMin;
    let totalArrivalMins = arrivalHour * 60 + arrivalMin;

    let totalMinsDiff = Math.abs(totalExamMins - totalArrivalMins);
    let hoursDiff = Math.floor(totalMinsDiff / 60);
    let minsDiff = totalMinsDiff % 60;

    let timeDiff = '';

    if (hoursDiff > 0) {
        if (minsDiff < 10) {
            timeDiff = `${hoursDiff}:0${minsDiff}`;
        } else {
        timeDiff = `${hoursDiff}:${minsDiff}`;
        }
    } else {
        timeDiff = minsDiff;
    }

    if (totalArrivalMins < totalExamMins) {
        if (totalMinsDiff <= 30) {
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`);
        } else {
            console.log("Early");
            if (totalMinsDiff < 60) {
                console.log(`${timeDiff} minutes before the start`);
            } else {
                console.log(`${timeDiff} hours before the start`);
            }
        }
    } else if (totalArrivalMins > totalExamMins) {
        console.log("Late");

        if (totalMinsDiff < 60) {
            console.log(`${timeDiff} minutes after the start`);
        } else {
            console.log(`${timeDiff} hours after the start`);
        }
    } else {
        console.log("On time");

    }
}
solve(["9", "30", "9", "50"]);
