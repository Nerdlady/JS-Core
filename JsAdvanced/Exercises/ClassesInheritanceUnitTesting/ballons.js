function ballons() {
    class Balloon{
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }


        get color() {
            return this._color;
        }

        set color(value) {
            this._color = value;
        }

        get gasWeight() {
            return this._gasWeight;
        }

        set gasWeight(value) {
            this._gasWeight = value;
        }
    }


    class PartyBalloon extends Balloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight,ribbonColor,ribbonLength );
            this._ribbon = {color: ribbonColor, length:ribbonLength};
        }


        get ribbon() {
            return this._ribbon;
        }

        set ribbon(value) {
            this._ribbon = value;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength,text){
            super(color,gasWeight,ribbonColor,ribbonLength);
            this.text = text;
        }
    }

    return { Balloon,PartyBalloon,BirthdayBalloon}
}
