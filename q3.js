function findnumbers(numbers,target){
    for(let i = 0;i<numbers.length;i++)
        {
        if(numbers[i]<0){
            continue;
        }
        if(numbers[i] == target){
            return  "Found";
        }
    }
    return  "Not Found";
}
console.log(findnumbers([-5,10,-2,7,20],7));