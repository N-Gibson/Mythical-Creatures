class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.meal = 0;
  }
  eat() {
    this.meal = this.meal + 1;
    if (this.meal >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon