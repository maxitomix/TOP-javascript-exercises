const sumAll = function(a,b) 
{
let sum = 0;
let start = 0;
let end = 0;
let fail;
if (a<0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b))
    {
    fail = "ERROR"
    console.log(fail);
    return fail;
    }
    else
    {
        if (a>b)
            {start = b;
            end = a;  
            }
            else
            {
            start = a;
            end = b;
            }
        
                for (i=start; i<=end; i++)
                {
                sum += i;
                }
            console.log(sum);
            return sum;
    }

};

sumAll(5,6)

// Do not edit below this line
module.exports = sumAll;
