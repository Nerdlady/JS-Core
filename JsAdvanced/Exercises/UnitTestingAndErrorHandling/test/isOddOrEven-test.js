let expect = require("chai").expect;
let isOddOrEven = require("../isOdd").isOddOrEven;

describe("isOddOrEven(string)",function () {
    it('should return undefined for number',function () {
        let actual = isOddOrEven(5);
        expect(actual).to.be.undefined;
    });

    it('should return odd for "a"',function () {
        let expected = 'odd';
        let actual = isOddOrEven('a');
        expect(actual).to.be.equal(expected);
    })

    it('should return even for "ab"',function () {
        let expected = 'even';
        let actual = isOddOrEven('ab');
        expect(actual).to.be.equal(expected);
    })

});

