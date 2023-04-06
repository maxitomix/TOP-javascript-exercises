const fibonacci = function(toFind) 
{
    parseInt(toFind);
    if (toFind<0)
        {
        result = "OOPS"
        console.log(result)
        return result;
        };
    let fibonacciArray =[0,1];
    if (0===toFind)
        {
        result = 0
        console.log(result)
        return result;
        };
    
    while (fibonacciArray.length-1 < toFind  )
        {
            a = fibonacciArray[(fibonacciArray.length-1)]
            b = fibonacciArray[(fibonacciArray.length-2)]
            ab = a+b
            fibonacciArray.push(ab)
        
        }
    
    console.log(fibonacciArray)

    console.log("postion ",toFind, "is the fibonacci number ",fibonacciArray[toFind])
    return fibonacciArray[toFind];
    
    // while (fibonacciArray[(length-1)] !=toFind)
    //     {
    //         fibonacciArray.push(fibonacciArray[(length-1)]+fibonacciArray[(length-2)])
    //     }
    //     {
    //         console.log(length-1)
    //     }

//     // The simplest is the series 1, 1, 2, 3, 5, 8, etc.
//     fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
//     fibonacci(6) // returns 8
};

fibonacci(0)
fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)
fibonacci(5)
fibonacci(6)
fibonacci(10)
fibonacci(-10)
fibonacci("10")
// Do not edit below this line
module.exports = fibonacci;
