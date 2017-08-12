let expect = require("chai").expect;
let createCalculator = require("../addSubstract").createCalculator;

describe("createCalculator()", function () {
    let calculator;
    beforeEach(function () {
        calculator = createCalculator();
    });
    it('should return object', function () {
        let actual = createCalculator();
        expect(actual).to.be.an('object')
    });
    it('should return object with add property', function () {
        let actual = createCalculator();
        expect(actual).to.have.property('add')
    });

    it('should return object with subtract property', function () {
        let actual = createCalculator();
        expect(actual).to.have.property('subtract')
    });

    it('should return object with get property', function () {
        let actual = createCalculator();
        expect(actual).to.have.property('get')
    });
    it('should return add function', function () {
        let actual = createCalculator().add;
        expect(actual).to.be.an('function')
    });
    it('should return subtract function', function () {
        let actual = createCalculator().add;
        expect(actual).to.be.an('function')
    });
    it('should return get function ', function () {
        let actual = createCalculator().add;
        expect(actual).to.be.an('function')
    });
    it('get result should return 0 ', function () {
        let actual = createCalculator().get();
        expect(actual).to.be.equal(0)
    });
    it('add function should not return value ', function () {
        let actual = createCalculator().add(1);
        expect(actual).to.be.undefined;
    });
    it('subtract function should not return value ', function () {
        let actual = createCalculator().add(1);
        expect(actual).to.be.undefined;
    });
    it('add functions should add 1', function () {
        let start = calculator.get();
        calculator.add(1);
        expect(calculator.get()).to.be.equal(start + 1);
    });
    it('add functions should add 5', function () {
        let start = calculator.get();
        calculator.add(5);
        expect(calculator.get()).to.be.equal(start + 5);
    });
    it('subtract functions should subtract 1', function () {
        let start = calculator.get();
        calculator.subtract(1);
        expect(calculator.get()).to.be.equal(start - 1);
    });
    it('subtract functions should subtract 5', function () {
        let start = calculator.get();
        calculator.subtract(5);
        expect(calculator.get()).to.be.equal(start - 5);
    });
    it('subtract take string should return NaN', function () {
        let start = calculator.get();
        calculator.subtract('f');
        expect(calculator.get()).to.be.NaN;
    });
    it('add take string should return Nan', function () {
        let start = calculator.get();
        calculator.add('f');
        expect(calculator.get()).to.be.NaN;
    });
    it('subtract take string should subtract', function () {
        let start = calculator.get();
        calculator.subtract('5');
        expect(calculator.get()).to.be.equal(start - 5);
    });
    it('add take string should return undefined', function () {
        let start = calculator.get();
        calculator.add('5');
        expect(calculator.get()).to.be.equal(start + 5);
    });

});

