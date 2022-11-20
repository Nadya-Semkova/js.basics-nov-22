function match(input) {
  let  budget = Number(input[0]);
  let  category = input[1];
  let numPeople = Number(input[2]);
  let total;

  if (numPeople >= 1 && numPeople <= 4) {
    budget = budget * 0.25;
  } else if (numPeople >= 5 && numPeople <= 9) {
    budget = budget * 0.40;
  } else if (numPeople >= 10 && numPeople <= 24) {
    budget = budget * 0.50;
  } else if (numPeople >= 25 && numPeople <= 49) {
    budget = budget * 0.60;
  } else if (numPeople >= 50) {
    budget = budget * 0.75;
  }

  switch(category) {
    case "VIP":
        total = numPeople * 499.99;
    break;
    case "Normal":
        total = numPeople * 249.99;
    break;        
  }
  if (budget > total) {
    let moneyLeft = budget - total;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else if (budget < total) {
    let moneyNeeded = total - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }

}
match(["30000", "VIP", "49"]);