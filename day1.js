// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let c = Number(prompt("Enter third number:"));

// if (a > b && a > c) {
//     console.log("Largest number is: " + a);
// }
// else if (b > a && b > c) {
//     console.log("Largest number is: " + b);
// }
// else {
//     console.log("Largest number is: " + c);
// }






// let n = Number(prompt("Enter a number:"));

// if (n % 2 == 0) {
//     console.log("The number is even");
// }
// else {
//     console.log("The number is odd");
// }







// let n = Number(prompt("Enter a number:"));
// let count = 0;

// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("The number is prime");
// }
// else {
//     console.log("The number is not prime");
// }







// let n = Number(prompt("Enter a number:"));
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact = fact * i;
// }

// console.log("Factorial is: " + fact);









let n = Number(prompt("Enter number of terms:"));

let a = 0;
let b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;
}