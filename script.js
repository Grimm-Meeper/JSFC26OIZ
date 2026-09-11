//global vars:
var animalPopulation = 0
//classes:
class Animal {
    
    constructor(name,favoriteFood) {
        this.name = name
        this.favoriteFood = favoriteFood
        animalPopulation++
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

    static getPopulation(){
      return(animalPopulation)
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
  
  constructor(name) {
    super(name, "leaves");
  }

  eat(food) {

      if (food == "leaves") {
        console.log(this.name + " eats " + food);
        console.log("YUM!!! " + this.name + " wants more leaves");
        this.sleep(this.name);
      } else {
        console.log("YUCK!!! " + this.name + " will not eat " + food);
      }
    }

}

class Unicorn extends Animal{

  constructor(name) {
    super(name, "marshmallows")
  }

  sleep(){
    console.log(this.name + " sleeps in a cloud.")
  }
}

class Bee extends Animal{

  constructor(name){
    super(name)
  }
  
  sleep(name) {
    console.log(name + " never sleeps.")
  }

  eat(food) {
    if (food == "pollen") {
        console.log(this.name + " eats " + food);
        console.log("YUM!!! " + this.name + " wants more pollen");
      } else {
        console.log("YUCK!!! " + this.name + " will not eat " + food);
      }
    }

}

class zookeeper {

  constructor(name){
    this.name = name
  }

  feedAnimals(animals, food){
    console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals.")
    for(let i = 0; i < animals.length; i++) {
      animals[i].eat(food)
    }
  }
}

function run(){
  //init:
  var Tigger = new Tiger("Tigger");
  var Pooh = new Bear("Pooh");
  var Rarity = new Unicorn("Rarity");
  var Gemma = new Giraffe("Gemma");
  var Stinger = new Bee("Stinger");
  //output:
  Tigger.eat( "meat");
  Pooh.eat("fish");
  Pooh.eat("meat");
  Rarity.eat("marshmallows");
  Rarity.sleep();
  Gemma.eat("meat");
  Gemma.eat("leaves");
  Stinger.eat("ice cream")
  Stinger.eat("pollen")
  console.log("")
  //new:
  var zoe = new zookeeper("Zoebot")
  zoe.feedAnimals([Tigger, Pooh, Rarity, Gemma, Stinger], "fuck")
  console.log("")
}