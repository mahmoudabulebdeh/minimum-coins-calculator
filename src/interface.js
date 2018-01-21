/**
 * Created by Mahmoud on 20/01/2018.
 */


/**
 * Interface is an object to facilitate the data visualisation on the user interface
 * It provides the functionality needed to manipulate the home page, displaying/hiding results and messages to the users
 */
var Interface = {

    // Display error messages to the user
    displayError: function (str) {

        $('#error-panel-body').html('<p>' + str + '</p>');

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





