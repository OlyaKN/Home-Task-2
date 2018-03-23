class Man {
  constructor (myName, mySex) {
    this.myName = myName;
    this.mySex = mySex;
  }
  sayHello () {
    console.log("hi, my name is " + this.myName);
  }
  getMarry (person) {
    if (this === person) return;
    if (person.mySex === this.mySex) return;
    if (person && this.myCouple != person) {
      this.myCouple = person;
      this.myCouple.getMarry(this);
    }
  }
  whoIsMyCouple () {
    console.log(this.myName + " > " + (this.myCouple && this.myCouple.myName || 'none'));
  }
}

var sergey = new Man('Sergey', 'm');
var vasya = new Man('Vasya', 'm');
sergey.getMarry(vasya);
sergey.whoIsMyCouple();
vasya.whoIsMyCouple();

class Woman extends Man {
  constructor (myName) {
   super(myName);
   }
}

var masha = new Woman('Masha', 'w');
masha.getMarry(sergey);
masha.whoIsMyCouple();
sergey.whoIsMyCouple();
var sveta = new Woman('Sveta', 'w');
var marta = new Woman('Marta', 'w');
sveta.getMarry(marta);
sveta.whoIsMyCouple();
marta.whoIsMyCouple();
marta.getMarry(vasya);
marta.whoIsMyCouple();
vasya.whoIsMyCouple();
