/* Define an object called square, which will hold methods
 * that have to do with the geometry of squares. It should
 * contain two methods, area and perimeter.
 * area should accept the length of a side and then return
 * the side squared.
 * perimeter should accept the length of a side and return 
 * that side multiplied by 4.
 */

const SQUARE = {
    area : function (side) {
        return side * side;
    },
    perimeter : function (side) {
        return side * 4;
    }
}

//For Testing
SQUARE.area(10);      //100
SQUARE.perimeter(10); //40