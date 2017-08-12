function printDeckOfCards(cards) {
    function makeCard(face,suit) {
        switch(face){
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                break;
            default:
                throw new Error("Invalid card: " + face + suit);

        }

        switch(suit){
            case 'S':
                suit = '\u2660';
                break;
            case  'H':
                suit = '\u2665';
                break;
            case 'D':
                suit = '\u2666';
                break
            case 'C':
                suit = '\u2663';
                break;
            default:
                throw new Error("Invalid card: " + face + suit);

        }

        return face + suit;
    }
    let deck = [];
    try {
        for (let card of cards) {
            deck.push(makeCard(card.substring(0,card.length -1),card[card.length -1]));
        }
    } catch (e){
     return  e.message;
    }


    return deck.join(' ');
}



console.log(printDeckOfCards(['AS', 'g0D', 'KH', '2C']));
