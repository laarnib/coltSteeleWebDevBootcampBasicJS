// Last element exercise
// Function should return the last element of the 
// array without removing the element. If the array
// is empty, the function should return null.

// My solution
function lastElement(array)
{
    if (array.length > 0)
    {
        return array[array.length-1];
    }
    else
    {
        return null;
    }
}

// For Testing
lastElement([3,5,7]);
lastElement([1]);
lastElement([]);