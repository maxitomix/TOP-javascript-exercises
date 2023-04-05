const removeFromArray = function(arrayInput,removeThis) 
    {
        let arrayOut = Array.from(arrayInput);
        console.log(arrayOut);
        let removeThisArray = Array.from(arguments);
        lengthArguments = arguments.length;
        console.log("lenght",lengthArguments);
        removeThisArray.splice(0,1);
        console.log("items to remove",removeThisArray);
        
        for (i=0; i<(lengthArguments-1); i++)
            {
                if (arrayOut.indexOf(removeThisArray[i]) < 0)
                            {
                                continue
                            }
                            else 
                            {
                             arrayOut.splice(arrayOut.indexOf(removeThisArray[i]), 1)
                            }             
            }

        console.log(arrayOut)
        return arrayOut;
 
    };



    removeFromArray([1,2,3,4,5,6,7,8,9,10],3, 4, "hdh")


    // const removeFromArray = function(arrayInput,removeThis) 
    // {
    //     let arrayOut = Array.from(arrayInput);
    //     console.log(arrayOut);
    //     positionToRemove = arrayOut.indexOf(removeThis)
    //     console.log(positionToRemove);
    //     arrayOut.splice(positionToRemove,1)
    //     console.log(arrayOut);
    // };



    // removeFromArray([1,2,3,4,5,6],3)

// Do not edit below this line
module.exports = removeFromArray;
