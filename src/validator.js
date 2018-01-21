/**
 * Created by Mahmoud on 20/01/2018.
 */

/**
 * Validator is an object that provides the functionality to validate user inputs
 */
var Validator = {

    /**
     * Check if the input is a valid Sterling amount ( number of pennies and/or Sterling pounds )
     * @param {String} str
     * @returns {{result: boolean, message: string}}
     */
    validSterlingAmount: function (str) {
        // holds the result of the validation and a message to the user
        var validation = {
            'result': false,
            'message': ''
        };

        //  removes all newlines, spaces and tabs from the beginning and end of the supplied string
        var input = $.trim(str);

        if(input === ''){
            validation.message = 'No input found! Please enter valid sterling amount and press enter!';
        } else if(this.containWhiteSpaceCharacter(input)){
            validation.message = 'Unexpected space character was found! Please enter valid sterling amount and press enter!';
        } else if(this.containsUnExpectedValue(input)){
            validation.message = 'Unexpected character was found! Please enter a valid sterling amount and press enter!';
        } else if(this.containsNonNumeric(input)){
            validation.message = 'No numeric value found! Please enter a valid sterling amount and press enter!';
        } else if(this.containsPoundSignInWrongPosition(input)){
            validation.message = 'Pound Sign in wrong position! Please enter a valid sterling amount and press enter!';
        } else if(this.containsPennySignInWrongPosition(input)){
            validation.message = 'Penny Sign in wrong position! Please enter a valid sterling amount and press enter!';
        } else if(this.containsDecimalPointInWrongPosition(input)){
            validation.message = 'Decimal point found in wrong Position! Please enter a valid sterling amount and press enter!';
        } else if(this.containsMoreThanOneDecimalPoint(input)){
            validation.message = 'More than one decimal point was found! Please enter a valid sterling amount and press enter!';
        } else {
            validation.result = true;
            validation.message = "valid input!"
        }
        return validation;
    },

    // check if string contains a White space Character
    containWhiteSpaceCharacter: function(str) {
        var regex = /\s+/g;
        return regex.test(str);
    },

    // check if the string contains any invalid character
    // if it contains anything other than numerical value or the decimal point and the Penny and the Pounds
    containsUnExpectedValue: function(str) {
        var regex = /[^£.p\d]/g;
        return regex.test(str);
    },

    // check if the string contains at least one digit
    containsNonNumeric: function(str) {
        var regex = /\d+/g;
        return !regex.test(str);
    },

    // check if the string has the pound sign in incorrect position
    containsPoundSignInWrongPosition: function(str) {
        var CheckPoundSign = str.substring(1);
        var regex = /£+/g;
        return regex.test(CheckPoundSign);
    },

    // check if the string has the Penny sign in incorrect position
    containsPennySignInWrongPosition: function(str) {
        var CheckPennydSign = str.substring(0,str.length-1);
        var regex = /p+/g;
        return regex.test(CheckPennydSign);
    },

    // check if the string has the Decimal Point in incorrect position
    containsDecimalPointInWrongPosition: function(str) {
        var begins = str.substring(0,1);
        var ends = str.substring(str.length-1);
        if (begins == '.' || ends == '.')
            return true;
        else
            return false;
    },
    // check if the string has more than one Decimal Point
    containsMoreThanOneDecimalPoint: function(str) {
        var count = 0;
        for(var i=0; str.length > i; i++){
            if(str.charAt(i) == '.'){
                ++count;
            }
        }
        return count>1;
    }

};


