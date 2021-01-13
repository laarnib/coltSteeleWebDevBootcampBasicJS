// Sum Array Exercise
/* Write a function called sumArray, which accepts
 * a single argument: an array of numbers.  It should
 * return the sum of all the numbers in the array. */

 // My solution
 function sumArray(numbersArray)
{
    let sum = 0;
    
    // Check if array is empty
    if (numnbersArray.length === 0)
    {
        return null;
    }
    else
    {
        for (let number of numbersArray)
        {
            sum += number;
        }
        return sum;
    }
}

// For testing
sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);
sumArray([0]);
sumArray([]);