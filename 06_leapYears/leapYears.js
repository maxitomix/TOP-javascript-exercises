const leapYears = function(checkYear)
 {
    console.log(checkYear%4===0);
    console.log(checkYear%100===0);
    console.log(checkYear%400===0);
    if (checkYear%400===0)
        {
            console.log(checkYear,"is a leap year a")
            return true;
        }
        else
        {
           if(checkYear%4===0 && checkYear%100===0)
                    {
                        console.log(checkYear,"is not a leap year b")
                        return false;
                    }
                    else
                    {
                        if (checkYear%4===0)
                        {
                            console.log(checkYear,"is a leap year c")
                            return true;
                        }
                        else
                        {
                            console.log(checkYear,"is a no leap year c")
                            return false;
                         }
                    
                     }


        };
    }
leapYears(2000) ;//yes
leapYears(1600) ;//yes
leapYears(1984) ;//yes
leapYears(2004) ;//yes
leapYears(1985) ;//no
leapYears(1800) ;//no
leapYears(1900) ;//no



// Do not edit below this line
module.exports = leapYears;


// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

// > Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
// >
// > -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

// ```javascript
// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false
// ```


// ## Hints
// - use an `if` statement and `&&` to make sure all the conditions are met properly