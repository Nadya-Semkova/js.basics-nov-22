function Repainting(input) {
let Nylon = Number(input[0]);
let Paint = Number(input[1]);
let Thinner = Number(input[2]);
let Hours = Number(input[3]);

let NylonPrice = (Nylon + 2) * 1.50;
let PaintPrice = (Paint * 1.1) * 14.50
let ThinnerPrice = Thinner * 5.00;

let Work = (NylonPrice + PaintPrice + ThinnerPrice + 0.40);
let WorkerSum = (Work * 0.3) * Hours;
let TotalSum = Work + WorkerSum;

console.log(TotalSum);
}
Repainting(["10", "11", "4", "8"]);