class Fairy {
  constructor(name, dust, clothes) {
    this.name = name;
    this.dust = dust || 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    // var dustBefore = this.dust;
    // var dustAfter = this.dust + 1;
    // var difference = dustAfter - dustBefore;
    // console.log(difference)
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(dresses) {
    for(var i = 0; i < dresses.length; i++) {
      this.clothes.dresses.push(dresses[i])
    }
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    if(this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant); 
      } else {
        return infant;
    }
    if(this.humanWards.length === 3) {
     this.disposition = 'Good natured';
   }
  }
}
module.exports = Fairy