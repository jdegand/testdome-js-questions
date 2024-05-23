function calculateFinalSpeed(initialSpeed, inclinations) {
    let speed = initialSpeed;

    for (let i = 0; i < inclinations.length; i++) {
        if (inclinations[i] < 0) {
            speed += Math.abs(inclinations[i]); // Absolute Value is a must here
        } else {
            speed -= inclinations[i]; // works with / without using Absolute Value
            // speed check has to be after subtracting 
            if (speed <= 0) {
                return 0;
            }
        }
    }

    return speed;
}

console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));