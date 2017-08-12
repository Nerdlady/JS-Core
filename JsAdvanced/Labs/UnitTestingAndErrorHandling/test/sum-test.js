let expect = require("chai").expect;
let sum = require("../sumOfNumbers").sum;

describe("sum(arr) - sum array of numbers",function () {
    it('should return 3 for [1,2]',function () {
        let expectedSum = 3;
        let actual = sum([1,2]);
        expect(actual).to.be.equal(expectedSum)
    });
    it('should return -3 for [-1,-2]',function () {
        let expectedSum = 3;
        let actual = sum([1,2]);
        expect(actual).to.be.equal(expectedSum)
    });
    it('should return 0 for [0,0]',function () {
        let expectedSum = 3;
        let actual = sum([1,2]);
        expect(actual).to.be.equal(expectedSum)
    });
});
