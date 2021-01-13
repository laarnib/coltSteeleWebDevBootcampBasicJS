// Capitalize 
// Define a function called capitalize
// that accepts a string argument
// and returns a new string with the first
// letter capitalized but the rest of the 
// string unchanged.


// My solution
function capitalize(word)
{
    let firstChar, remainingChar;
    
    if (word === undefined)
    {
        return null;
    }
    else
    {
        firstChar = word[0].toUpperCase();
        remainingChar = word.slice(1);
        
        return firstChar+remainingChar;
    }
}

// Another solution
function capitalize(word)
{
    if (word === undefined)
    {
        return null;
    }
    else
    {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}

//For testing
capitalize("eggplant");
capitalize("pamplemousse");
capitalize("squid");