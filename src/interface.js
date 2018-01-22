/**
 * Created by Mahmoud on 20/01/2018.
 */


/**
 * Interface is an object to facilitate the data visualisation on the user interface
 * It provides the functionality needed to manipulate the home page, displaying/hiding results and messages to the users
 */
var Interface = {


    /**
     * Returns the results of the minimum number of coins calculation in a formatted style
     * @param {string}  user inputs ( number of pennies or pounds provided by the user as input )
     * @param {Object} coins, the results of the minimum number of coins calculation
     * @returns {string} the results in a formatted style
     */
    prepareResults: function(input, coins) {
        var quantity, results = '';

        var keys = Object.keys( coins );

        keys.sort(function(a, b){return b-a});

        for(var i=0; i<keys.length; i++){

            var key = keys[i];

            quantity = coins[key];

            if (key == '100' || key == '200')
                key = '£' + key[0];
            else
                key = key + 'p';

            results += quantity + ' x ' + key + ' ,';
        }
        results = input + ' = ' + results.substr(0,results.length-1);

        console.log(results);

        return results;
    },


    // Display error messages to the user
    displayError: function (str) {

        $('#error-panel-body').html('<p>' + str + ' Please enter valid Sterling amount!</p>');

        $("#error-panel").removeClass('hidden');

        $("#results-panel").addClass('hidden');

    },

    // Display results to the user
    displayResults: function (str) {
        $('#results-panel-body').html('<p>' + str + '</p>');

        $("#results-panel").removeClass('hidden');

        $("#error-panel").addClass('hidden');
    }

};





