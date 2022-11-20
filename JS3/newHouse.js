function newHouse(input) {
  let  flowers = input[0];
  let  numFlowers = Number(input[1]);
  let budget = Number(input[2]);
  let price = 0;

  switch(flowers) {
    case "Roses": 
     price = numFlowers * 5;
    break;
    case "Dahlias":
        price = numFlowers * 3.80;
    break;
    case "Tulips":
        price = numFlowers * 2.80;
    break;
    case "Narcissus":
        price = numFlowers * 3;
    break;
    case "Gladiolus":
        price = numFlowers * 2.50;
    break;
  }

  if (flowers === "Roses") {
    if (numFlowers > 80) {
        price = price * 0.9;
    }
  } else if (flowers === "Dahlias") {
    if (numFlowers > 90) {
        price = price * 0.85;
    }
  } else if (flowers === "Tulips") {
    if (numFlowers > 80) {
        price = price * 0.85;
    }
  } else if (flowers === "Narcissus") {
    if (numFlowers < 120) {
        price = price * 1.15;
    }
  } else if (flowers === "Gladiolus") {
    if (numFlowers < 80) {
        price = price * 1.2;
    }
  }

  if (budget >= price) {
    let moneyLeft = budget - price;
    console.log(`Hey, you have a great garden with ${numFlowers} ${flowers} and ${moneyLeft.toFixed(2)} leva left.`);
  } else if (budget < price) {
    let moneyNeeded = price - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
  }

}
newHouse(["Tulips", "88", "260"])