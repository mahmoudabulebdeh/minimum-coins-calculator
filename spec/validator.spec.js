/**
 * Created by Mahmoud on 22/01/2018.
 * /

 /*
 * Specification for testing the Validator functionality
 */

describe("Validator.validSterlingAmount()", function() {

    var validation;

    beforeEach(function () {
        validation = {
            'result': false,
            'message': ''
        };
    });

    it("validSterlingAmount should be defined", function() {
        expect(Validator.validSterlingAmount()).toBeDefined;
    });

    it("returns 'No input found!' for empty input", function() {
      validation.message = 'No input found!';
        expect(Validator.validSterlingAmount('')).toEqual(validation);
    });

    it("returns 'Unexpected space character was found!' for '2 43' as an input", function() {
        validation.message = 'Unexpected space character was found!';
        expect(Validator.validSterlingAmount('2 23')).toEqual(validation);
    });

    it("returns 'Invalid character was entered!' for '13x' as an input", function() {
        validation.message = 'Invalid character was entered!';
        expect(Validator.validSterlingAmount('13x')).toEqual(validation);
    });

    it("returns 'No numeric value found!' for '£' as an input", function() {
        validation.message = 'No numeric value found!';
        expect(Validator.validSterlingAmount('£')).toEqual(validation);
    });

    it("returns 'Pound Sign in wrong position!' for '2£' as an input", function() {
        validation.message = 'Pound Sign in wrong position!';
        expect(Validator.validSterlingAmount('2£')).toEqual(validation);
    });

    it("returns 'Penny Sign in wrong position!' for '13p.02' as an input", function() {
        validation.message = 'Penny Sign in wrong position!';
        expect(Validator.validSterlingAmount('13p.02')).toEqual(validation);
    });

    it("returns 'Decimal point found in wrong Position!' for '.99' as an input", function() {
        validation.message = 'Decimal point found in wrong Position!';
        expect(Validator.validSterlingAmount('.99')).toEqual(validation);
    });

    it("returns 'More than one decimal point was found!' for '8..2' as an input", function() {
        validation.message = 'More than one decimal point was found!';
        expect(Validator.validSterlingAmount('8..2')).toEqual(validation);
    });

    it("returns 'valid input!' for '123p' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('123p')).toEqual(validation);
    });

    it("returns 'valid input!' for '£12.34' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('£12.34')).toEqual(validation);
    });

    it("returns 'valid input!' for '432' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('432')).toEqual(validation);
    });
    it("returns 'valid input!' for '£16.23p' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('£16.23p')).toEqual(validation);
    });

    it("returns 'valid input!' for '£23.33333' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('£23.33333')).toEqual(validation);
    });

    it("returns 'valid input!' for '£14' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('£14')).toEqual(validation);
    });

    it("returns 'valid input!' for '001.41p' as an input", function() {
        validation.message = 'valid input!';
        validation.result = true;
        expect(Validator.validSterlingAmount('001.41p')).toEqual(validation);
    });

});