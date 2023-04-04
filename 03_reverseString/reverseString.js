
const reverseString = function(string)
     {
        let result =""    
        stringLength = string.length;
        // console.log(string);
        // console.log(stringLength);
        // console.log(string[2]);
        // result += string[4];
        // result += string[3];
        // result += string[2];
        // console.log(result);
        for (i=stringLength-1; i>=0;i--)
        {
        result += string[i];
        }
        // return console.log(result);  
        return result;
        
    };

// reverseString("hello")

// Do not edit below this line
module.exports = reverseString;
