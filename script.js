class Player{
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player{
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weee, I'm a ${this.type}`);
  }
}
