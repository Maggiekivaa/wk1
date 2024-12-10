function checkSpeed(speed) {
    const speedLimit = 70; 
    const demeritPointPer5km = 5; 
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / demeritPointPer5km);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

checkSpeed(80); 
