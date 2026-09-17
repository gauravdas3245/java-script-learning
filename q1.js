function checktemperature(temparature){
    let message="";
    if(temparature<20)
    {
        message="COLD";
    }
    else if(temparature>20 && temparature <30)
    {
         message="NORMAL";
    }
    else
    {
         message="HOT";
    }
    return message;
}
console.log(checktemperature(25));