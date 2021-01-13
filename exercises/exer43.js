// Days of the Week
/* Write a function called returnDay. This function
 * takes in one parameter (a number from 1-7) and 
 * returns the day of the week (1 is Monday, 2 is 
 * Tuesday, etc.) If the number is less than 1 or 
 * greater than 7, the function should return null.
 * For this exercise, we will use Monday as the first
 * day. */


 // My solution
 function returnDay (number)
{
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday", "Sunday"];
                           
    if (number >=1 && number <= 7)
    {
        return daysOfTheWeek[number - 1];
    }
    else
    {
        return null;
    }
}

//For Testing
returnDay(1);
returnDay(7);
returnDay(4);
returnDay(0);
returnDay();