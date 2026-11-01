
function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of numbers) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } 
        else if (num > smallest && num < secondSmallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        return "No second smallest number";
    }

    return secondSmallest;
}

console.log(findSecondSmallest([8, 3, 5, 3, 1, 9]));
