// function convertCelsiusToFahrenheit([celsius]) {
//     let fahrenheit = celsius * (9 / 5) + 32;
//     console.log("Fahrenheit = " + fahrenheit.toFixed(2));
// }
// convertCelsiusToFahrenheit([32.3]);

function convertCelsiusToFahrenheit(input) {
    let celsius = Number(input[0]);
    let fahrenheit = ((celsius * 1.8) + 32).toFixed(2);
    console.log(fahrenheit);

}
convertCelsiusToFahrenheit(["25"])