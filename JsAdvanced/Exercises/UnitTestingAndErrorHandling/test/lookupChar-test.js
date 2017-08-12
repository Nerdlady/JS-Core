let expect = require("chai").expect;
let lookupChar = require("../lookupChar").lookupChar;

describe("lookupChar(string,index)",function () {
    it('should return undefined for number as first parameter',function () {
        let actual = lookupChar(1,5);
        expect(actual).to.be.undefined;
    });

    it('should return undefined for string as second parameter',function () {
        let actual = lookupChar('test','wrong');
        expect(actual).to.be.undefined;
    });

    it('should return undefined for double as second parameter',function () {
        let actual = lookupChar('test',2.5);
        expect(actual).to.be.undefined;
    });

    it('should return "Incorrect index" for index -1',function () {
        let actual = lookupChar('a',-1);
        let expected = 'Incorrect index';
        expect(actual).to.be.equal(expected);
    });

    it('should return "Incorrect index" for index out of range',function () {
        let actual = lookupChar('a',50);
        let expected = 'Incorrect index';
        expect(actual).to.be.equal(expected);
    });

    it('should return "a" for index 0',function () {
        let actual = lookupChar('a',0);
        let expected = 'a';
        expect(actual).to.be.equal(expected);
    });

    it('should return "f" for index 5',function () {
        let actual = lookupChar('abcdef',5);
        let expected = 'f';
        expect(actual).to.be.equal(expected);
    });
});


