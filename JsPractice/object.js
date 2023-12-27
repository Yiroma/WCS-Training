const apple = {
  isEaten: false,
  eat: function () {
    // We check the value of isEaten
    if (this.isEaten) {
      // If isEaten is true, we display a specific message
      console.log("The fruit has already been eaten...");
    } else {
      // Otherwise we change the state of isEaten to true
      this.isEaten = true;
      console.log("You eat the apple...");
    }
  },
};
console.log(apple.isEaten);
apple.eat();
console.log(apple.isEaten);
apple.eat();

const billyTheCat = {
  name: "Billy",
  species: "Cat",
  isHungry: true,
  feed: function () {
    if (this.isHungry) {
      this.isHungry = false;
      console.log("Billy a faim et mange son poisson.");
    } else {
      console.log("Billy n'a pas faim.");
    }
  },
};

console.log(billyTheCat.isHungry); // true
billyTheCat.feed(); // Billy a faim et mange son poisson.
console.log(billyTheCat.isHungry); // false
billyTheCat.feed(); // Billy n'a pas faim.
