//array basic

const colors = ["Red","green","blue"];
colors[0]="orange";
console.log(colors[colors.length - 1]);
console.log(colors[0]);
console.log(colors[5]);

//push(for adding elements at the last)

const numbers = [10,20,30]
 numbers.push(40);
 console.log(numbers);

 //pop(for removing elements from the last)

 numbers.pop();
 console.log(numbers);

//unshift(for adding elements at the begining)

numbers.unshift(60);
console.log(numbers);

//shift(for removing elements from the begining)

numbers.shift();
console.log(numbers);
