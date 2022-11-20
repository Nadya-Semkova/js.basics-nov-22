function skiTrip(input) {
    let daysStay = Number(input[0]);
    let typeRoom = input[1];
    let asessment = input[2];
    let total = 0;

    if (typeRoom === "room for one person") {
        if (daysStay < 10) {
            total = (daysStay - 1) * 18;
        } else if (daysStay > 10 && daysStay < 15) {
            total = (daysStay - 1) * 18;
        } else if (daysStay > 15) {
            total = (daysStay - 1) * 18;
        }
    } else if (typeRoom === "apartment") {
        if (daysStay < 10) {
            total = (daysStay - 1) * 25 * 0.7;
        } else if (daysStay > 10 && daysStay < 15) {
            total = (daysStay - 1) * 25 * 0.65;
        } else if (daysStay > 15) {
            total = (daysStay - 1) * 25 * 0.5;
        }
    } else if (typeRoom === "president apartment") {
        if (daysStay < 10) {
            total = (daysStay - 1)* 35 * 0.9;
        } else if (daysStay > 10 && daysStay < 15) {
            total = (daysStay - 1) * 35 * 0.85;
        } else if (daysStay > 15) {
            total = (daysStay - 1)* 35 * 0.80;
        }
    }
    if (asessment === "positive") {
        total = total * 1.25;
    } else if (asessment === "negative") {
        total = total * 0.9;
    }
    console.log(total.toFixed(2));
    
}
skiTrip(["12", "room for one person", "positive"]);