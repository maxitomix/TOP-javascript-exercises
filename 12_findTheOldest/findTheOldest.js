const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Pete",
        yearOfBirth: 2018,
      },
      {
        name: "John",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Mike",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
      {
        name: "Andrew",
        yearOfBirth: 1066,
      },
      {
        name: "Ralph",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Javier",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    const people2 = [
        {
          name: "Carly",
          yearOfBirth: 1066,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]

const findTheOldest = function(myArray) {
    const modelArray = [
        {
            name: "Max",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
        },
    ]

    console.log("Received: ", myArray);

    let compliantItems = myArray.filter(item => {
        return Object.keys(item).length == Object.keys(modelArray[0]).length;
      });

    console.log("These are compliant items: ",compliantItems);

    let nonCompliantItems = myArray.filter(item => {
        return Object.keys(item).length !== Object.keys(modelArray[0]).length;
      });
    
    
    console.log("These items dont have age of death: ",nonCompliantItems);

    let today = new Date();
    let year = today.getFullYear();
    nonCompliantItems = nonCompliantItems.map(item => {
        return { ...item,  yearOfDeath: year };
    });

    console.log("We add today`s year: ",nonCompliantItems);

    let cleanPeople = compliantItems.concat(nonCompliantItems);

    console.log("Now we merge both: ",cleanPeople);

    cleanPeople.forEach((element) => element.age = (element.yearOfDeath - element.yearOfBirth));

    cleanPeople.sort((a,b) => (a.age - b.age));

    console.log("Now we calc age and sort: ", cleanPeople);

    console.log("The oldest person is: ",cleanPeople[cleanPeople.length-1]);
    return cleanPeople[cleanPeople.length-1]
    }

findTheOldest(people2)

// Do not edit below this line
module.exports = findTheOldest;

// # Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
