function menuChoice(choices){
    let result;
    switch (choices){
        case 1:
            result = "start game"
            break;
        case 2:
            result = "load game"
            break;
        case 3:
            result = "setings"  
            break;
        case 4:
            result = "exit"
            break;
        default:
            result = "invalid choice"  
            break;        
    }
    return result;
}
console.log(menuChoice(2));