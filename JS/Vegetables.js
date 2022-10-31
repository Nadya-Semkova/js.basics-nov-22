function Vegetables(input) {
  let  priceVegetables = Number(input[0]);
  let  priceFruits = Number(input[1]);
  let totalVegetables = Number(input[2]);
  let totalFruits = Number(input[3]);

  let sum = priceVegetables * totalVegetables;
  let sum2 = totalFruits * priceFruits;
  let totalSum = ((sum + sum2) / 1.94).toFixed(2);
  console.log(totalSum);
      
}
Vegetables(["0.194", "19.4", "10", "10"]);
