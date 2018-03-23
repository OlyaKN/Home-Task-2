class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setBestFriend (person) {
    if (this === person) return;
    if (person && this.bestFriend !== person) {
      this.bestFriend = person;
      this.bestFriend.setBestFriend(this);
    }
  }
  whoIsMyBestFriend () {
    console.log(this.name + " > " + (this.bestFriend && this.bestFriend.name || 'none'));
  }
}

var sergey = new Person('Sergey', 42);
sergey.whoIsMyBestFriend();
var vasya = new Person('Vasya', 43);
sergey.setBestFriend(vasya);
sergey.whoIsMyBestFriend();
vasya.whoIsMyBestFriend();
var petya = new Person('Petya', 45);
sergey.setBestFriend(petya);
sergey.whoIsMyBestFriend();
petya.whoIsMyBestFriend();
