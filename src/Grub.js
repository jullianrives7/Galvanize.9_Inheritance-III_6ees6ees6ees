// ES6 Class Doc: https://ponyfoo.com/articles/es6-classes-in-depth

// Grub
//  Create a Grub class, in ES6 style, with:
//  an age property that is set to 0
//  a color property that is set to pink
//  a food property that is set to jelly
//  an eat method that returns 'Mmmmmmmmm jelly'

class Grub {
  constructor() {
    this.age = 0;
    this.color = "pink";
    this.food = "jelly";
  }
  eat() {
    return "Mmmmmmmmm jelly";
  }
}

// Class Structure
// .
// ├── Grub
// │   └── Bee
// │       ├── HoneyMakerBee
// │       └── ForagerBee
// │          └── RetiredForagerBee
