
const findGCD = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
};

const findArrayGCD = (numbers) => {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = findGCD(result, numbers[i]);
    }

    return result;
};

console.log(findArrayGCD([12, 18, 24]));
console.log(findArrayGCD([20, 40, 60]));
console.log(findArrayGCD([7, 14, 21]));
