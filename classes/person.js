// Your code here

class Person {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    if (!Array.isArray(people)){
      throw new Error("introducePeople only takes an array as an argument.");
    }
    for (let i = 0; i < people.length; i++) {
    if(!(people[i] instanceof Person)){
      throw new Error("All items in array must be Person class instances.")
    }
    else {
      people[i].introduce();
    }
    }
  }
}

const person1 = new Person ("Mikaela", "Taylor", 400)
const person2 = new Person ("Alex", "Bryan", 22)

const peopleArray = [person1, person2]

person1.introduce();

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
