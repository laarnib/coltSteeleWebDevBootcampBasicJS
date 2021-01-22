/* It's time to get practice with the map method!
 * Define a function called cleanNames. It should
 * accept an array of strings, which may contain
 * additional space characters at the beginning and
 * end.  The cleanNames function should use the 
 * array map method to return a new array, full of
 * trimmed names. For example:
 * 
 * cleanNames([" timothee", " darth_hater", " sassyfrassy ", " elton john "]);
 * // => ["timothee", "darth_hater", "sassyfrassy", "elton john"]
 */

function cleanNames(nameList) {
    const newNameList = nameList.map(function(name) {
        return name.trim();
    });
    
    return newNameList;
}