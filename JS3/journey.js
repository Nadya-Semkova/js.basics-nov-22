function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0;
    let place = 0;

    if (season === "summer") {
        place = "Camp";
    } else if (season === "winter") {
        place = "Hotel";
    }

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": 
                budget = budget * 0.3;
            break;
            case "winter":
                budget = budget * 0.7;
            break;
            
        } 
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch(season) {
            case "summer":
                budget = budget * 0.4;
            break;
            case "winter":
                budget = budget * 0.8;
            break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        switch (season) {
            case "winter":
            case "summer":
                place = "Hotel";
                budget = budget * 0.9;
            break;
        }
        
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);

}
journey(["1500", "summer"]);