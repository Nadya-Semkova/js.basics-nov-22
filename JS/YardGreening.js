function YardGreening(input) {
    let area = Number(input[0]);
    let price = area * 7.61;
    let discount = 0.18 * price;
    let finalPrice = (price - discount);

    console.log(`The final price is ${finalPrice} lv.`);
    console.log(`The discount is ${discount} lv.`);
}
YardGreening(["550"]);
