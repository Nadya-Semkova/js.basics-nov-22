function evenPowers(input) {
    let n = Number(input[0]);
    for (i = 0; i <= n; i++) {
        if(i % 2 == 0) {
            let number = Math.pow(2, i);
            console.log(number);
        }
    }

}
evenPowers(["10"]);