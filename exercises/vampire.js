class Vampire {
  constructor(name, pet='bat', thirsty) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }
  drink() {
    this.thirsty = false
  }
}

module.exports = Vampire


// if (pet === undefined) {
//       return (this.pet = 'bat');
//     } else {
//       return (this.pet = pet);     
// //     