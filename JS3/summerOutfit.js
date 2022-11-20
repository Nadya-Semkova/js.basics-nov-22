function summerOutfit(input) {
    let degrees = Number(input[0]);
    let text = input[1];

    if (degrees >= 10 && degrees <= 18) {
        switch (text) {
            case "Morning":
            let outfit = "Sweatshirt";
            let shoes = "Sneakers";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
            case "Afternoon":
                let outfit1 = "Shirt";
                let shoes1 = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit1} and ${shoes1}.`);
                break;
            case "Evening":
                let outfit2 = "Shirt";
                let shoes2 = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`);
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (text) {
            case "Morning":
            let outfit = "Shirt";
            let shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
            case "Afternoon":
                let outfit1 = "T-Shirt";
                let shoes1 = "Sandals";
                console.log(`It's ${degrees} degrees, get your ${outfit1} and ${shoes1}.`);
                break;
            case "Evening":
                let outfit2 = "Shirt";
                let shoes2 = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`);
                break;
        }

    } else if (degrees >= 25) {
        switch (text) {
            case "Morning":
            let outfit = "T-Shirt";
            let shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
            break;
            case "Afternoon":
                let outfit1 = "Swim Suit";
                let shoes1 = "Barefoot";
                console.log(`It's ${degrees} degrees, get your ${outfit1} and ${shoes1}.`);
                break;
            case "Evening":
                let outfit2 = "Shirt";
                let shoes2 = "Moccasins";
                console.log(`It's ${degrees} degrees, get your ${outfit2} and ${shoes2}.`);
                break;
        }
    }

}
summerOutfit(["22", "Afternoon"]);