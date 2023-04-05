const convertToCelsius = function(numFahrenheit) 
  {
    resultFromFtoC = Math.round(((numFahrenheit-32)/1.8)*10)/10;
    console.log(numFahrenheit, "F is ", resultFromFtoC, "C")
    return resultFromFtoC;
  };

const convertToFahrenheit = function(numCelcius)
  {
    resultFromCtoF = Math.round(((numCelcius*1.8)+32)*10)/10;
    console.log(numCelcius, "C is ", resultFromCtoF, "F")
    return resultFromCtoF;
  };


convertToCelsius(100);
convertToFahrenheit(37);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
