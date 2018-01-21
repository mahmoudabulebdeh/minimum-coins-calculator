/**
 * Created by Mahmoud on 21/01/2018.
 */

/**
 * Parser is an object that provides the functionality needed to parse user inputs to Pennies
 */
var Parser = {

    /**
     * check if user input has the pound sign
     * @param str
     * @returns {boolean}
     */
    hasPoundSign: function(str){
        var regex = /£+/g;
        return regex.test(str);
    },

    /**
     * remove the sings from the user inputs
     * @param str
     * @returns {string}
     */
    removeSymbols: function(str){
        return str.replace(/[£p]/g, '');
    },

    /**
     * check if the input value is Decimal
     * @param val
     * @returns {boolean}
     */
    isDecimal: function(val){
        return (val % 1 !== 0);
    },

    /**
     * convert user input to Pennies
     * @param str
     * @returns {float}
     */
    convertToPennies: function (str) {

        var strWithoutSymbols = this.removeSymbols(str);

        var num = parseFloat(strWithoutSymbols);

        // if the input is in pounds convert it to pennies
        if (this.hasPoundSign(str) || this.isDecimal(num))
            return (num.toFixed(2) * 100);

        // the input value is already in Pennies
        return num;
    }
};

