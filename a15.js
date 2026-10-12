function findMinMax(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }

    let minimum = numbers[0];
    let maximum = numbers[0];

    for (let num of numbers) {
        if (num < minimum) {
            minimum = num;
        }

        if (num > maximum) {
            maximum = num;
        }
    }

    return {
        minimum: minimum,
        maximum: maximum
    };
}

console.log(findMinMax([18, 5, 42, 9, 27]));