function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let temperature = 25;

let result = celsiusToFahrenheit(temperature);

console.log("Celsius:", temperature);
console.log("Fahrenheit:", result);
