function solve(input) {
let n = Number(input[0]);
let salary = Number(input[1]);

for (i = 2; i < input.length; i++) {
    let current = input[i];
    if (current == "Facebook") {
        salary -= 150;
    } else if (current == "Instagram") {
        salary -= 100;
    } else if (current == "Reddit") {
        salary -= 50;
    }
}
    if (salary <= 0) {
        console.log("You have lost your salary.")
    return;
    } else {
        console.log(salary);
    }
    

}
solve(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
