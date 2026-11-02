
const findLCM = (a, b) => {
    let x = Math.abs(a);
    let y = Math.abs(b);

    const originalProduct = x * y;

    while (y !== 0) {
        let remainder = x % y;
        x = y;
        y = remainder;
    }

    if (x === 0) {
        return 0;
    }

    return originalProduct / x;
};

console.log(findLCM(12, 18));
console.log(findLCM(8, 12));
console.log(findLCM(5, 7));
