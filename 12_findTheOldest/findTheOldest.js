const findTheOldest = function (arr) {
    let oldestPerson = {name: '', age: 0};
    for (i = 0; i < arr.length; i++) {
        let yearOfBirth = arr[i].yearOfBirth;
        let yearOfDeath = arr[i].yearOfDeath;
        yearOfDeath = typeof yearOfDeath !== 'undefined' ? yearOfDeath : new Date().getFullYear();
        let age = yearOfDeath - yearOfBirth;
        if (oldestPerson.age < age) {
            oldestPerson.name = arr[i].name;
            oldestPerson.age = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
