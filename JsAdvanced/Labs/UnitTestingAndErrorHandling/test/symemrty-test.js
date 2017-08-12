let expect = require("chai").expect;
let isSymmetric = require("../symmetry").isSymmetric;

describe("isSymmetric(arr)",function () {
    it('should return false for wrong parameter',function () {
        let expectedSum = false;
        let actual = isSymmetric('wrong');
        expect(actual).to.be.false;
    });
    it('should return true for symmetric array',function () {
        let actual = isSymmetric(['a','b','b','a']);
        expect(actual).to.be.true
    });
    it('should return false for not symmetric array',function () {
        let actual = isSymmetric([1,2]);
        expect(actual).to.be.false
    });
    it('should return true for array with one element',function () {
        let actual = isSymmetric(['a']);
        expect(actual).to.be.true
    });
    it('should return true for empty array',function () {
        let actual = isSymmetric([]);
        expect(actual).to.be.true
    });
    it('should return false for different types',function () {
        let actual = isSymmetric([1,'test',3,'3','test','1']);
        expect(actual).to.be.false
    })

    it('should return true for different types',function () {
        let actual = isSymmetric([1,'test',3,3,'test',1]);
        expect(actual).to.be.true
    });
});

