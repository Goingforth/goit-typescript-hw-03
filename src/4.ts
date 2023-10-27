class Key {
    private signature: number;
    constructor() {
        this.signature = Math.random();
    }
    getSignature():number {return  this.signature } ;
};

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

type TDoor = true | false;
abstract class House {
    public door: TDoor;
    protected tenants: Person[] = [];
    constructor(protected key: Key) { }
    comeIn(person: Person): void {
      this.door ?  this.tenants.push(person): console.log("Key incorrect") ;
  }
  abstract openDoor(key: Key): void;
 };

class MyHouse extends House {
    openDoor(key: Key): void {
        key.getSignature() !== this.key.getSignature() ? console.log("Door close") : this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};