let expect = require("chai").expect;
let Console = require("../console").Console;

describe("Console class",function () {
    it('should return string for "Test"',function () {
        expect(Console.writeLine('Test')).to.be.equal('Test');
    });

    it('should return Json for object',function () {
        let object = {name:'pesho'};
        let expected = JSON.stringify(object);
        expect(Console.writeLine(object)).to.be.equal(expected);
    });

    it('should throw Type error for multiple arguments but first not string',function () {
        expect(()=>Console.writeLine(1,2,3,4)).to.throw(TypeError);
    });

    it('should throw Range error for parameters not correspond to the number of placeholders',function () {
        expect(()=>Console.writeLine('{0}',1,2)).to.throw(RangeError);
    });

    it('should throw Range error for placeholders have indexes not withing the parameters range',function () {
        expect(()=>Console.writeLine('{13}',1,2)).to.throw(RangeError);
    });

    it('should return "Test works" for "Test {0}", works',function () {
        expect(Console.writeLine('Test {0}','works')).to.be.equal('Test works');
    })

    it('should return "Test works fine" for "Test {0} {1}", works,fine',function () {
        expect(Console.writeLine('Test {0} {1}','works','fine')).to.be.equal('Test works fine');
    })

});