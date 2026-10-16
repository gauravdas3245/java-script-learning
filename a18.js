function convertTime(totalSeconds) {
    if (totalSeconds < 0 || !Number.isInteger(totalSeconds)) {
        return "Invalid input";
    }

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

console.log(convertTime(7384));
