//starter code

function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

  }

class Tiger {

    constructor(name) {
        this.name = name;
        this.favoriteFood = "meat";
    }

    sleep() {
      console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
      console.log(this.name + " eats " + food);
      if (food == this.favoriteFood) {
        console.log("YUM!!! " + this.name + " wants more " + food);
      } else {
        this.sleep(this.name);
      }
    }
}

class Bear {

    constructor(name) {
        this.name = name;
        this.favoriteFood = "fish";
    }

    sleep() {
      console.log(this.name + " hibernates for 4 months");
    }

    eat(food) {
      console.log(this.name + " eats " + food);
      if (food == this.favoriteFood) {
        console.log("YUM!!! " + this.name + " wants more " + food);
      } else {
        this.sleep(this.name);
      }
    }
}