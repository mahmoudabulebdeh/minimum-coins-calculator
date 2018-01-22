/**
 * Created by Mahmoud on 22/01/2018.
 * /

 /*
 * Specification for testing the Calculator functionality
 */

describe("Calculator.coinCounter()", function() {

    it("should be defined", function() {
        expect(Calculator.coinCounter()).toBeDefined;
    });

    it("returns 2 for '222,100' as an input", function() {
        expect(Calculator.coinCounter(222,100)).toEqual(2);
    });

    it("returns 0 for '10,50' as an input", function() {
        expect(Calculator.coinCounter(10,50)).toEqual(0);
    });

    it("returns 4 for '88,20' as an input", function() {
        expect(Calculator.coinCounter(88,20)).toEqual(4);
    });
});

describe("Calculator.remainingValue()", function() {

    it("should be defined", function() {
        expect(Calculator.remainingValue()).toBeDefined;
    });

    it("returns 22 for '222,100' as an input", function() {
        expect(Calculator.remainingValue(222,100)).toEqual(22);
    });

    it("returns 0 for '10,50' as an input", function() {
        expect(Calculator.remainingValue(10,50)).toEqual(10);
    });

    it("returns 8 for '88,20' as an input", function() {
        expect(Calculator.remainingValue(88,20)).toEqual(8);
    });
});


describe("Calculator.coinChangeMaker()", function() {

    var results = {};
    beforeEach(function() {
        results = {};
    });

    it("returns {1: 1, 2: 1, 20: 1, 100: 1} for 123p as an input", function() {
        results['100'] = 1;
        results['20'] = 1;
        results['2'] = 1;
        results['1'] = 1;
        expect(Calculator.coinChangeMaker(123)).toEqual(results);
    });

    it("returns {2: 2, 10: 1, 20: 1, 200: 6} for 1234 as an input", function() {
        results['200'] = 6;
        results['20'] = 1;
        results['10'] = 1;
        results['2'] = 2;
        expect(Calculator.coinChangeMaker(1234)).toEqual(results);
    });

});
