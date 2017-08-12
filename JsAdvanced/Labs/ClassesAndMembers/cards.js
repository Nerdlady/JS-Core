let result = (function () {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }


        get face() {
            return this._face;
        }

        set face(value) {
            let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (!validFaces.includes(value)) {
                throw new Error("invalid face");
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                throw new Error("Invalid card suite");
            }
            this._suit = value;
        }
    }

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    };

    return {
        Suits: Suits,
        Card: Card
    }
})();

let Card = result.Card;
let Suit = result.Suits;

let card = new Card("Q", Suit.CLUBS);
card.face = "A";
card.suit = Suit.DIAMONDS;
let card2 = new Card("4", Suit.Pehso)

