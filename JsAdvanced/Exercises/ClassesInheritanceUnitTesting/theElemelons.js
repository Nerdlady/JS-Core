function elemelons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Melon is abstract class');
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._type = '';
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Element: ${this._type}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._type = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._type = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._type = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._type = 'Air';
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        morph() {
            let types = ['Fire', 'Earth', 'Air', 'Water'];
            let index = types.indexOf(this._type);
            this._type = types[(index +1) % 4];
        }
    }

    return { Melon,Watermelon,Airmelon,Firemelon,Earthmelon,Melolemonmelon};
}

let res = elemelons();
// let test = new res.Melon(100, "Test");
//Throws error

let watermelon = new res.Melolemonmelon(12.5, "Kingsize");
watermelon.morph()
watermelon.morph()
console.log(watermelon.toString());


