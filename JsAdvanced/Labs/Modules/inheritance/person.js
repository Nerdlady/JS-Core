import Entity from "./entity";
import Dog from "./dog";
export default class Person extends Entity {
    constructor(name, phrase, dog) {
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }


    set dog(value) {
        if (!(value instanceof Dog)) {
            throw new TypeError("Dog value should be instance of Dog");
        }
        this._dog = value;
    }


    get dog() {
        return this._dog;
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.saySomething()}`
    }
}
