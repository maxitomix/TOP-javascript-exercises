const removeFromArray = function(arrayInput,removeThis) 
    {
        let arrayOut = Array.from(arrayInput);
        console.log(arrayOut);
        let removeThisArray = Array.from(removeThis);
        console.log(removeThisArray);
        // removeThisLength = (removeThisArray.length);
        // console.log(removeThisLength);
        // console.log(removeThis[0]);
        // console.log(removeThis[1]);
        // console.log(removeThis[2]);
            // for (i=o; i>2;i++)
            // {
            //     positionToRemove = arrayOut.indexOf(removeThis)
            //     console.log(positionToRemove);
            //     arrayOut.splice(positionToRemove,1)
            // }

  
    };



    removeFromArray([1,2,3,4,5,6,7,8,9,10],3,6)


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
