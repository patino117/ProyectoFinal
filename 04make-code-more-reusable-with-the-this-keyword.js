let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs();
//sayName: function() {return "The name of this duck is " + duck.name + ".";}
//  sayName: function() {return "The name of this duck is " + this.name + ".";}