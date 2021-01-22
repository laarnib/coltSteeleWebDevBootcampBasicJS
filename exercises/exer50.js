/* Some or Every Exercise
 * Define a function called allEvens that accepts a single array
 * of numbers. If the array contains all even numbers, return true.
 * Otherwise, return false. 
 */
 

 function allEvens(numList) {
    if (numList.every(num => num % 2 === 0)) {
        return true;
    }
    else {
        return false;
    }
}


// For testing
allEvens([2,4,6,8])   //true
allEvens([1,4,6,8])   //false
allEvens([1,2,3])     //false
