
function calculateParkingFee(hours) {
    if (hours <= 0) {
        return 0;
    }

    hours = Math.ceil(hours);

    if (hours <= 2) {
        return hours * 20;
    }

    return 40 + (hours - 2) * 10;
}

console.log(calculateParkingFee(4));
console.log(calculateParkingFee(1.5));
console.log(calculateParkingFee(5));
