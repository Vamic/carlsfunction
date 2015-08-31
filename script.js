/* Function for getting the proper grammar for a number
 * Examples:
 * 1  =>  1st
 * 2  =>  2nd
 * 12 => 12th
 * 21 => 21st
 * Invalid inputs return "Invalid input"
 */
function grammar(input){
    if (input <= 0 
     || input % 1 != 0)
        return "Invalid input";
    var number = ""+input;
    var secondtolastdigit = "0";
    if(number.length > 1)
        secondtolastdigit = number.substr(number.length-2,1);
    
    if(secondtolastdigit == 1)
        return input + "th";
        
    var lastdigit = number.substr(number.length-1,1);
    
    var suffix = "th";
    if(lastdigit == 1)
        suffix = "st";
    else if (lastdigit == 2)
        suffix = "nd";
    else if (lastdigit == 3)
        suffix = "rd";
    
    return input+suffix;
}