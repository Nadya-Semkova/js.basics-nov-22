function operation(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let evenOdd = 0;
    let remainder = 0;
    
    switch(operator) {
        case "+":
            result = N1 + N2;
        if (result % 2 === 0) {
            evenOdd = "even";
        } else {
            evenOdd = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`)
        break;

        case "-":
            result = N1 - N2;
        if (result % 2 === 0) {
            evenOdd = "even";
        } else {
            evenOdd = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
        break;

        case "*":
            result = N1 * N2;
            if (result % 2 === 0) {
                evenOdd = "even";
            } else {
                evenOdd = "odd";
            }
            console.log(`${N1} ${operator} ${N2} = ${result} - ${evenOdd}`);
            break;

            case "/":
                result = N1 / N2;
                if (N2 === 0) {
                    console.log(`Cannot divide ${N1} by zero`);

                } else {
                  console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);
                }
                break;

                
            case "%":
                remainder = N1 % N2;
                if (N2 === 0) {
                    console.log(`Cannot divide ${N1} by zero`);
                } else {
                  console.log(`${N1} ${operator} ${N2} = ${remainder}`);
                 }
                  break;
                
    }
}
operation(["10", "1", "-"]);