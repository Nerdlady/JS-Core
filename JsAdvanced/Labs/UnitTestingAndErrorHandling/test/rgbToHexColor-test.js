let expect = require("chai").expect;
let rgbToHexColor = require("../rgbToHexColor").rgbToHexColor;

describe("rgbToHexColor(red,green,blue)",function () {
    it('should return undefined when red parameter is not number',function () {
        let actual = rgbToHexColor('5',4,5);
        expect(actual).to.be.undefined;
    });
    it('should return undefined when green parameter is not number',function () {
        let actual = rgbToHexColor(5,'5',5);
        expect(actual).to.be.undefined;
    });

    it('should return undefined when blue parameter is not number',function () {
        let actual = rgbToHexColor(5,4,'5');
        expect(actual).to.be.undefined;
    });

    it('should return undefined when red parameter is less then 0',function () {
        let actual = rgbToHexColor(-1,4,5);
        expect(actual).to.be.undefined;
    });
    it('should return undefined when green parameter is less then 0',function () {
        let actual = rgbToHexColor(1,-4,5);
        expect(actual).to.be.undefined;
    });
    it('should return undefined when blue parameter is less then 0',function () {
        let actual = rgbToHexColor(1,4,-5);
        expect(actual).to.be.undefined;
    });

    it('should return undefined when red parameter is greater then 255',function () {
        let actual = rgbToHexColor(300,4,5);
        expect(actual).to.be.undefined;
    });

    it('should return undefined when green parameter is greater then 255',function () {
        let actual = rgbToHexColor(5,268,5);
        expect(actual).to.be.undefined;
    });

    it('should return undefined when blue parameter is greater then 255',function () {
        let actual = rgbToHexColor(5,4,565);
        expect(actual).to.be.undefined;
    });

    it('should return aqua(#00FFFF)',function () {
        let expected = '#00FFFF';
        let actual = rgbToHexColor(0,255,255);
        expect(actual).to.be.equal(expected);
    });
});

