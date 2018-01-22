/**
 * Created by Mahmoud on 22/01/2018.
 * /

 /*
 * Specification for testing the Parser functionality
 */

describe("Parser.hasPoundSign()", function() {

    it("should be defined", function() {
        expect(Parser.hasPoundSign()).toBeDefined;
    });

    it("returns true for '£13' as an input", function() {
        expect(Parser.hasPoundSign('£13')).toEqual(true);
    });

    it("returns true for '£16.23p' as an input", function() {
        expect(Parser.hasPoundSign('£16.23p')).toEqual(true);
    });

    it("returns true for '£23.33333' as an input", function() {
        expect(Parser.hasPoundSign('£23.33333')).toEqual(true);
    });

    it("returns false for '88' as an input", function() {
        expect(Parser.hasPoundSign('88')).toEqual(false);
    });

    it("returns false for '123p' as an input", function() {
        expect(Parser.hasPoundSign('123p')).toEqual(false);
    });
});

describe("Parser validation - removeSymbols()", function() {

    it("should be defined", function() {
        expect(Parser.removeSymbols('')).toBeDefined;
    });

    it("returns '333' for '333p' as an input", function() {
        expect(Parser.removeSymbols('333p')).toEqual('333');
    });

    it("returns '16.23' for '£16.23p' as an input", function() {
        expect(Parser.removeSymbols('£16.23p')).toEqual('16.23');
    });

    it("returns '23.33333' for '£23.33333' as an input", function() {
        expect(Parser.removeSymbols('£23.33333')).toEqual('23.33333');
    });

    it("returns '14' for '£14' as an input", function() {
        expect(Parser.removeSymbols('£14')).toEqual('14');
    });

    it("returns '001.41' for '001.41p' as an input", function() {
        expect(Parser.removeSymbols('001.41p')).toEqual('001.41');
    });
});



describe("Parser validation - isDecimal()", function() {

    var num;

    it("should be defined", function() {
        expect(Parser.isDecimal('')).toBeDefined;
    });

    it("returns true for '£16.23p' as an input", function() {
        num = Parser.removeSymbols('£16.23p');
        expect(Parser.isDecimal(num)).toEqual(true);
    });

    it("returns true for '£23.33333' as an input", function() {
        num = Parser.removeSymbols('£23.33333');
        expect(Parser.isDecimal(num)).toEqual(true);
    });

    it("returns true for '001.41p' as an input", function() {
        num = Parser.removeSymbols('001.41p');
        expect(Parser.isDecimal(num)).toEqual(true);
    });

    it("returns false for '£14' as an input", function() {
        num = Parser.removeSymbols('£14');
        expect(Parser.isDecimal(num)).toEqual(false);
    });

    it("returns false for '333p' as an input", function() {
        num = Parser.removeSymbols('333p');
        expect(Parser.isDecimal(num)).toEqual(false);
    });
});

describe("Parser validation - convertToPennies()", function() {

    it("should be defined", function() {
        expect(Parser.convertToPennies('')).toBeDefined;
    });

    it("returns 432 for '432' as an input", function() {
        expect(Parser.convertToPennies('432')).toEqual(432);
    });

    it("returns 213 for '213p' as an input", function() {
        expect(Parser.convertToPennies('213p')).toEqual(213);
    });

    it("returns 1623 for '£16.23p' as an input", function() {
        expect(Parser.convertToPennies('£16.23p')).toEqual(1623);
    });

    it("returns 1400 for '£14' as an input", function() {
        expect(Parser.convertToPennies('£14')).toEqual(1400);
    });

    it("returns 5404 for '£54.04' as an input", function() {
        expect(Parser.convertToPennies('£54.04')).toEqual(5404);
    });

    it("returns 2333 for '£23.33333' as an input", function() {
        expect(Parser.convertToPennies('£23.33333')).toEqual(2333);
    });

    it("returns 141 for '001.41p' as an input", function() {
        expect(Parser.convertToPennies('001.41p')).toEqual(141);
    });
});



