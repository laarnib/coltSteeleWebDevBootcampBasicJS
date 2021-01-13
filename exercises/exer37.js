/* Multiple Args Exercise
 * In some dice games like Craps, a roll of two 1's
 * is called "Snake Eyes".  It's generally not a good
 * roll. Please write a function called isSnakeEyes, 
 * which accepts two numbers as inputs, representing 
 * two dice.  If the two numbers are both 1's, please 
 * print "Snake Eyes!", otherwise print "Not Snake Eyes!"*/

 // My solution
 // Added a condition to check if user forgets to roll a dice or 
 // both dice.
 function isSnakeEyes(dice1, dice2){
    if (dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!");
    }
    else if (dice1 === undefined || dice2 === undefined )
    {
        console.log("Missing dice");
    }
    else
    {
        console.log("Not Snake Eyes!");
    }
}

// For testing
isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);
isSnakeEyes(1);
isSnakeEyes();