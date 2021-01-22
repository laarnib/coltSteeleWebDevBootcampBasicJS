/* Define an object called hen.  It should have three properties:
 * name should be set to 'Helen'
 * eggCount should be set to 0
 * layAnEgg should be a method which increments the value of eggCount
 * by 1 and returns the string "EGG". You'll need to use this.
 */

const hen = {
    name : "Helen",
    eggCount : 0,
    layAnEgg() {
        this.eggCount += 1;
        return "EGG";
    }
}


//For testing
hen.name;   //"Helen"
hen.eggCount;  //0
hen.layAnEgg();  //"EGG"
hen.layAnEgg();  //"EGG"
hen.eggCount; //2