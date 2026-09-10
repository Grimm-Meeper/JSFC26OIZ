//starter code

function run(){
  //init:
  var Tigger = new Tiger("Tigger");
  var Pooh = new Bear("Pooh");
  var Rarity = new Unicorn("Rarity");
  var Gemma = new Giraffe("Gemma");
  var Stinger = new Bee("Stinger");
  //output:
  Tigger.eat( "meat");
}

class Animal {
    
    constructor(name,favoriteFood) {
        this.name = name
        this.favoriteFood = favoriteFood
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

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
    }

}

class Bear extends Animal{

    constructor(name) {
      super(name, "fish");
    }

    sleep() {
      console.log(this.name + " hibernates for 4 months");
    }

}

class Giraffe extends Animal{
  
  constuctor(name) {
    super(name, "leaves");
  }

  eat(food) {
      console.log(this.name + " eats " + food);
      if (food == "leaves") {
        console.log("YUM!!! " + this.name + " wants more leaves");
        this.sleep(this.name);
      } else {
        console.log("YUCK!!! " + this.name + " will not eat " + food);
      }
    }

}

class Unicorn extends Animal{

  constuctor(name) {
    super(name, "marshmallows")
  }

  sleep(){
    console.log(this.name + " sleeps in a cloud.")
  }
}

class Bee extends Animal{
  constuctor(name){
    super(name)
  }
  
  sleep(name) {
    console.log(name + " never sleeps.")
  }

  eat(food) {
      console.log(this.name + " eats " + food);
      if (food == "nectar") {
        console.log("YUM!!! " + this.name + " wants more nectar");
      } else {
        console.log("YUCK!!! " + this.name + " will not eat " + food);
      }
    }

}