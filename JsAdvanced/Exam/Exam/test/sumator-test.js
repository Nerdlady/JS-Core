let expect = require("chai").expect;
let Sumator = require("../sumatorClass");

describe("Sumator Class", function () {

    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    describe("constructor", function () {
        it("should add number", function () {
            expect(sumator.data.length).to.be.equal(0);
        });

        it("has add",function () {
            expect(Sumator.prototype.hasOwnProperty("add")).to.be.true;
        })

        it("has sumNums",function () {
            expect(Sumator.prototype.hasOwnProperty("sumNums")).to.be.true;
        })

        it("has sumNums",function () {
            expect(Sumator.prototype.hasOwnProperty("toString")).to.be.true;
        })

        it("has sumNums",function () {
            expect(Sumator.prototype.hasOwnProperty("removeByFilter")).to.be.true;
        })

    });
    describe("add", function () {
        it("should add number", function () {
            sumator.add(1);
            expect(sumator.data.length).to.be.equal(1);
        });
        it("should add string", function () {
            sumator.add("a");
            expect(sumator.data.length).to.be.equal(1);
        });

        it("should add two elements", function () {
            sumator.add(1);
            sumator.add(2);
            expect(sumator.data.length).to.be.equal(2);
        });

        it("should add double", function () {
            sumator.add(1.5);
            expect(sumator.data.length).to.be.equal(1);
        });
    });

    describe("sumNums", function () {
        it("one number should return same element", function () {
            sumator.add(1);
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(1);
        });

        it("one string should return 0", function () {
            sumator.add("a");
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(0);
        });

        it("no elements should return 0", function () {
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(0);
        });

        it("two number should return sum", function () {
            sumator.add(1);
            sumator.add(2);
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(3);
        });

        it("three elements should return sum of numbers", function () {
            sumator.add(1);
            sumator.add("2");
            sumator.add(3);
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(4);
        });


        it("three elements should return sum of numbers", function () {
            sumator.add(1.5);
            sumator.add("2");
            sumator.add(3);
            let actual = sumator.sumNums();
            expect(actual).to.be.equal(4.5);
        });

    });
    describe("toString", function () {
        it("should (empty)", function () {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
        it("should one element", function () {
            sumator.add("one")
            expect(sumator.toString()).to.be.equal("one");
        });
        it("should one element", function () {
            sumator.add(1)
            expect(sumator.toString()).to.be.equal("1");
        });
        it("should join elements", function () {
            sumator.add(1);
            sumator.add("one");
            expect(sumator.toString()).to.be.equal("1, one");
        });

    });

    describe("removeByFilter", function () {
        it("should throw error", function () {
            sumator.add(5);
            expect(() => sumator.removeByFilter()).to.throw(TypeError);
        });
        it("should clear the data", function () {
            sumator.add(5);
            sumator.add(5);
            sumator.removeByFilter(a => typeof(a) === "number")
            expect(sumator.data.length).to.be.equal(0);
        });

        it("should change the data", function () {
            sumator.add(5);
            sumator.add("5");
            sumator.removeByFilter(a => typeof(a) === "number")
            expect(sumator.data.length).to.be.equal(1);
            expect(sumator.toString()).to.be.equal("5");
        });

        it("should not change the data", function () {
            sumator.add("2");
            sumator.add("5");
            sumator.removeByFilter(a => typeof(a) === "number")
            expect(sumator.data.length).to.be.equal(2);
            expect(sumator.toString()).to.be.equal("2, 5");
        });

        it("should  change the data", function () {
            sumator.add(2);
            sumator.add(5);
            sumator.removeByFilter(a => a % 2 === 0)
            expect(sumator.data.length).to.be.equal(1);
            expect(sumator.toString()).to.be.equal("5");
        });

    });
});
