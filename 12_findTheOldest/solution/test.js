const people2 = [
    {
      name: "Carly",
      yearOfBirth: 1066,
      yearOfDeath: 2011,
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
  
  const  testFind = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = (oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = (currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      console.log(oldestAge < currentAge ? currentPerson : oldest)
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
    };
  
  testFind(people2) 