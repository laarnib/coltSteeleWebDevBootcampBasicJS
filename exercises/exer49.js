/* Let's get practice using the filter method. Write a function
 * called validUserNames that accepts an array of usernames(strings).
 * It should return a new array, containing only the usernames that 
 * are less than 10 characters.
 */

function validUserNames(usernames) {
    return usernames.filter(username => username.length < 10);
}
