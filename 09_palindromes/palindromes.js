const palindromes = function (inputString) 
{

        let cleanInputString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
        cleanInputString = cleanInputString.toLowerCase();
        console.log("This input", inputString, "is cleaned into: ")
        console.log(cleanInputString)
        console.log(". A new string with this length:",cleanInputString.length)
        let reverseInputString = ""
        for (i=(cleanInputString.length -1);i>=0;i-- )
        {
          reverseInputString += cleanInputString[i];
        }
        console.log(". We now reverse that string into: ",reverseInputString);
        console.log(". We compare: ")
        console.log(cleanInputString)
        console.log(reverseInputString)
        let isPalindrome = cleanInputString==reverseInputString
        console.log(isPalindrome)
        return isPalindrome;
}

palindromes("RaceCar")

// Do not edit below this line

module.exports = palindromes;
