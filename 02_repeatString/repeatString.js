
// let string = "hey"
// let num = 3
const repeatString = function(string, num) {
    let result =""
    if (num < 0){ 
        result = "ERROR";
        // return console.log(result);
        return result;
             }
        else
         {
        
        for (i=0; i<num; i++)
        {
        result +=string
        }
        return  result;
        // return console.log(result);
               }
}
// repeatString("hey", 3);
// ;

// Do not edit below this line
module.exports = repeatString;
