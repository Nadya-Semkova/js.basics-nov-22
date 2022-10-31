function Fish(input) {
    let PriceSkumria = Number(input[0]);
    let PriceCaca = Number(input[1]);
    let KiloPalamud =  Number(input[2]);
    let KiloSafrid = Number(input[3]);
    let KiloClam = Number(input[4]);

    let PricePalamud = PriceSkumria * 1.6;
    let SumPalamud = KiloPalamud * PricePalamud;

    let Safrid = PriceCaca * 1.8;
    let SumSafrid = KiloSafrid * Safrid;

    let Clam = KiloClam * 7.50;
   
    let All = (SumPalamud + SumSafrid + Clam).toFixed(2);
    console.log(All);
}
Fish(["6.90", "4.20", "1.5", "2.5", "1"]);