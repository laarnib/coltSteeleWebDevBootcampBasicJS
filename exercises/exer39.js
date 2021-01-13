//isShortsWeather Function
/* Write a function called isShortsWeather.
 * It should accept a single number argument, which we will call
 * temperature.
 * If temperature  is greater than or equal to 75, return true.
 * Otherwise, return false.
 * This exercise assumes temperature is in Fahrenheit. */


 // My solution
function isShortsWeather(temperature) {
    if (temperature >= 75)
        return true;
    else 
        return false;
}


// For testing
isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);
isShortsWeather();