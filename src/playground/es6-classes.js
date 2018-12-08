class Person {
  constructor(name = 'Default', age='0') {
    this.name = name;
    this.age = age;
  }
  greetings(){
    return "Hey!";
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
   }
  hasMajor() {
    return !!this.major;
  }
}



//traveler extend person class
//add support for home location
// override getGreeting() 1. Hi I am Andrew mead I'm visiting from homr
// 2. Hi I am andrew mead

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home
  }
  getGreeting() {
    if (home) {
      return `Hi I am ${name}. I am visiting from ${home}`;
    } else {
      return super.getGreeting();
    }
  }
}

const him = new Traveler('Dan', '27', 'Philly');

console.log(him)

//add a second optional item age with default zero
//getDescription return string - Dan Schwartz is Age year(s) old.
