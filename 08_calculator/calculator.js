const add = function(a,b) {
	result = a+b;
  console.log(result);
  return result;
 
};

const subtract = function(a,b) {
  result = a-b;
  console.log(result);
  return result;
};

const sum = function(...numbers) {
    let result=0;
  	for (let number of numbers)
      {
       result +=number;
      }
    console.log(result);
    return result;
};

const multiply = function(...numbers) {
  let result=1;
  for (let number of numbers)
    {
    result *=number;
    }
  console.log(result);
  return result;
};

const power = function(a,b) {
  result = a**b;
	console.log(result);
  return result;
};

const factorial = function(x) 
{
  factorialArray = [];
	for (i=1;i<=x;i++)
    {
      factorialArray.push(i);
    }
    console.log(factorialArray);
    let result=1;
    for (let number of factorialArray)
      {
        result *=number;
        }
        console.log(result);
        return result;
};

add(4,6);
subtract(10,5);
sum(0);
multiply(2,4,6,8,10,12,14);
power(5,2);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

// sum                                                                                                                                                                                                                                     
// × computes the sum of an empty array (3 ms)                                                                                                                                                                                           
// × computes the sum of an array of one number (1 ms)                                                                                                                                                                                   
// × computes the sum of an array of two numbers (1 ms)                                                                                                                                                                                  
// × computes the sum of an array of many numbers (1 ms)                                                                                                                                                                                 
// multiply                                                                                                                                                                                                                                
// × multiplies two numbers (1 ms)                                                                                                                                                                                                       
// × multiplies several numbers (1 ms)          