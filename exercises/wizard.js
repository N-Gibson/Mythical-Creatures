class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = true;
    this.isRested = true;
    this.spell = 0;
    if (object.bearded === false) {
      this.bearded = object.bearded;
    }
  }
  incantation(noodles) {
    return noodles.toUpperCase ();
  }
  cast() {
   this.spell++;
   if (this.spell >= 3) {
    this.isRested = !this.isRested;
    return 'I SHALL NOT MAKITH CRAFTS';
   }
  }
}

module.exports = Wizard