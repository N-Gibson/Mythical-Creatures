class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0; 
  }
  shoot() {
    this.counter++;
    if(this.counter >=3) {
      this.cranky = true;
      return 'NO!'
    } else {
    return 'Twang!!!';
  }
}
  run() {
    this.counter++;
    if(this.counter >=3) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if(this.standing === true) {
      return 'NO!';
    }
  }
  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
    }
  standUp() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
}

module.exports = Centaur