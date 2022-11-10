function fuelTank(input) {
    let text = input[0];
    let fuelL = Number(input[1]);


    if (text === "Gas") {
        if (fuelL >= 25) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }
        
    } else if (text === "Gasoline") {
        if (fuelL >= 25) {
            console.log(`You have enough gasoline.`);
        } else {
            console.log(`Fill your tank with gasoline!`);
        }
    } else if (text === "Diesel") {
        if (fuelL >= 25) {
            console.log(`You have enough diesel.`);
        } else {
            console.log(`Fill your tank with diesel!`);
        }
        
    } else {
        console.log(`Invalid fuel!`);
    }
}

fuelTank(["Diesel", "10"]);