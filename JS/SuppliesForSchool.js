function SuppliesForSchool(input) {
    let PackPens = Number(input[0]) * 5.80;
    let PackMarkers = Number(input[1]) * 7.20;
    let Detergent = Number(input[2]) * 1.20;
    let Discount = input[3]
    let Discounts = Discount / 100;
    let AllPrice = PackPens + PackMarkers + Detergent;
    let DiscountPrice = AllPrice - (AllPrice*Discounts);
    console.log(DiscountPrice);
}
SuppliesForSchool(["2", "3", "4", "25"]);