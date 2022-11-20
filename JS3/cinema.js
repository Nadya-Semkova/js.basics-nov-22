function cinema(input) {
    let typeProjection = input[0];
    let numberRows = Number(input[1]);
    let numberColumns = Number(input[2]);

    switch (typeProjection) {
        case "Premiere":
            let total = ((numberColumns * numberRows) * 12.00).toFixed(2);
            console.log(`${total} leva`);
            break;
        case "Normal":
            let total1 = ((numberColumns * numberRows) * 7.50).toFixed(2);
            console.log(`${total1} leva`);
            break;
        case "Discount":
            let total2 = ((numberColumns * numberRows) * 5.00).toFixed(2);
            console.log(`${total2} leva`);
            break;
    }

}
cinema (["Discount", "12", "30"]);