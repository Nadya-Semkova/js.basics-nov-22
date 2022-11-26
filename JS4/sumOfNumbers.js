function sumOfNum(input) {

    let n = input[0];
    // let numAsString = n + "";
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum = sum + Number(n[i]);
    }
    console.log(`The sum of digits is:${sum}`);

}
sumOfNum([1234]);