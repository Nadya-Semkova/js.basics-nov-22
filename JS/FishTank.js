function FishTank(input) {
    let cmLength = Number(input[0]);
    let cmWidth = Number(input[1]);
    let cmHeight = Number(input[2]);
    let Percent = Number(input[3]);

    let RealPercent = Percent / 100;

    let Volume = cmLength * cmWidth * cmHeight;
    let Liters = Volume * 0.001
    let TakenSpace = RealPercent * Liters; 
    let spaceLeft = Liters - TakenSpace;

    console.log(spaceLeft);

}
FishTank(["85", "75", "47", "17"]);