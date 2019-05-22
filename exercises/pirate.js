class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.acts = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.acts++;
    if (this.acts >= 3) {
      this.cursed = true;
    }
  }
  robShip(booty) {
    this.booty = 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate