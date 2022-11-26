function bills(input) {
    let numMonths = Number(input[0]);
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    let average = 0;

    for (let i = 1; i < input.length; i++){
        let monthBill = Number(input[i]);
        electricity = electricity + monthBill;
    }
    water = water + 20 * numMonths;
        internet = internet + 15 * numMonths;
        other = (electricity + water + internet) * 1.20;
        average = (electricity + water + internet + other) / numMonths;

   

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);


}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ]);