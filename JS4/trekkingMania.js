function trek(input) {
    let numGroups = Number(input.shift());

    let Musala = 0;
    let Montblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;


    for (let i = 0; i < numGroups; i++) {
        let alpinists = Number(input.shift());
        if (alpinists <= 5) {
            Musala += alpinists;
        } else if (alpinists >= 6 && alpinists <= 12) {
            Montblanc += alpinists;
        } else if (alpinists >= 13 && alpinists <= 25) {
            Kilimanjaro += alpinists;
        } else if (alpinists >= 26 && alpinists <= 40) {
            K2 += alpinists;
        } else if (alpinists >= 41) {
            Everest += alpinists;
        }
    }

    let totalAlpinists = Musala + Montblanc + Kilimanjaro + K2 + Everest;
    let percentMusala = Musala / totalAlpinists * 100;
    let percentMontblanc = Montblanc / totalAlpinists * 100;
    let percentKilimanjaro = Kilimanjaro / totalAlpinists * 100;
    let percentK2 = K2 / totalAlpinists * 100;
    let percentEverest = Everest / totalAlpinists * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontblanc.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);


}
trek(["10",

"10",

"5",

"1",

"100",

"12", "26", "17", "37", "40", "78"]);