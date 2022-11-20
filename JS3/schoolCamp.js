function schoolCamp(input) {
    let season = input[0];
    let typeGroup = input[1];
    let numStudents = Number(input[2]);
    let numNights = Number(input[3]);
    let sum;
    let sport;

    // if (season === "Winter") {
    //     if (typeGroup === "girls") {
    //         sum = numNights * 9.60 * numStudents;
    //         sport = "Gymnastics"
    //     } else if (typeGroup === "boys") {
    //         sum = numNights * 9.60 * numStudents;
    //         sport = "Judo";
    //     } else if (typeGroup === "mixed") {
    //         sum = numNights * 10 * numStudents;
    //         sport = "Ski";
    //     }
    // } else if (season === "Spring") {
    //     if (typeGroup === "girls") {
    //         sum = numNights * 7.20 * numStudents;
    //         sport = "Athletics";
    //     } else if (typeGroup === "boys") {
    //         sum = numNights * 7.20 * numStudents;
    //         sport = "Tennis";
    //     } else if (typeGroup === "mixed") {
    //         sum = numNights * 9.50 * numStudents;
    //         sport = "Cycling";
    //     }
    // } else if (season === "Summer") {
    //     if(typeGroup === "girls") {
    //         sum = numNights * 15 * numStudents;
    //         sport = "Volleyball";
    //     } else if (typeGroup === "boys") {
    //         sum = numNights * 15 * numStudents;
    //         sport = "Football";
    //     } else if (typeGroup === "mixed") {
    //         sum = numNights * 20 * numStudents;
    //         sport = "Swimming";
    //     }

    // }

    // if (numStudents >= 50) {
    //     sum = sum * 0.50;
    // } else if (numStudents >= 20 && numStudents < 50) {
    //     sum = sum * 0.85;
    // } else if (numStudents >= 10 && numStudents < 20) {
    //     sum = sum * 0.95;
    // }

    switch(season) {
        case "Winter":
            switch(typeGroup){
                case "girls":
                    sum = numNights * 9.60 * numStudents;
                    sport = "Gymnastics"
                break;
                case "boys":
                    sum = numNights * 9.60 * numStudents;
                     sport = "Judo";
                break;
                case "mixed":
                    sum = numNights * 10 * numStudents;
                    sport = "Ski";
                break;
            }
        break;
        case "Spring":
            switch(typeGroup) {
                case "girls":
                    sum = numNights * 7.20 * numStudents;
                    sport = "Athletics";
                break;
                case "boys":
                    sum = numNights * 7.20 * numStudents;
                    sport = "Tennis";
                break;
                case "mixed":
                    sum = numNights * 9.50 * numStudents;
                    sport = "Cycling";
                break;
            }
        break;
        case "Summer":
            switch(typeGroup) {
                case "girls":
                    sum = numNights * 15 * numStudents;
                    sport = "Volleyball";
                break;
                case "boys":
                    sum = numNights * 15 * numStudents;
                    sport = "Football";
                break;
                case "mixed":
                    sum = numNights * 20 * numStudents;
                    sport = "Swimming";
                break;
            }
        break;
    }

    if (numStudents >= 50) {
            sum = sum * 0.50;
        } else if (numStudents >= 20 && numStudents < 50) {
            sum = sum * 0.85;
        } else if (numStudents >= 10 && numStudents < 20) {
            sum = sum * 0.95;
        }
    console.log(`${sport} ${sum.toFixed(2)} lv.`);
}
schoolCamp(["Summer", "boys", "60", "7"]);