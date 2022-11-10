function fuelTank2(input) {
  let fuelType = input[0];
  let fuelQuantity = Number(input[1]);
  let clubCard = Number(input[2]);

  let Gasoline = 2.22;
  let Diesel = 2.33;
  let Gas = 0.93;

  let fuelPrice = 0;

  if (clubCard === "Yes") {
    if (fuelType === "Gasoline") {
      fuelPrice = fuelQuantity * (Gasoline - 0.18);
    } else if (fuelType === "Diesel") {
      fuelPrice = fuelQuantity * (Diesel - 0.12);
    } else if (fuelType === "Gas") {
      fuelPrice = (Gas - 0.08) * fuelQuantity;
    }
  } else {
    if (fuelType === "Gasoline") {
      fuelPrice = fuelQuantity * Gasoline;
    } else if (fuelType === "Diesel") {
      fuelPrice = fuelQuantity * Diesel;
    } else if (fuelType === "Gas") {
      fuelPrice = fuelQuantity * Gas;
    }
  }

  if (fuelQuantity >= 20 && fuelQuantity <= 25) {
    fuelPrice = fuelPrice * 0.92;
  } else if (fuelQuantity > 25) {
    fuelPrice = fuelPrice * 0.90;
  }
  console.log(`${fuelPrice.toFixed(2)} lv.`);
}
fuelTank2(["Gas", "30", "Yes"]);