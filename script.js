//starter code

function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");
  }

class Tiger {

    constructor(name) {
        this.name = name
        this.favoriteFood = "meat"
    }

    sleep() {
      console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
      console.log(this.name + " eats " + food)
      if (food == this.favoriteFood) {
        console.log("YUM!!! " + this.name + " wants more " + food)
      } else {
        this.sleep(this.name)
      }
    }
}

