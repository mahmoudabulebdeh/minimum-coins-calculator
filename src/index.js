/**
 * Created by Mahmoud on 20/01/2018.
 */

// Execute the following when the DOM is fully loaded
$( document ).ready(function() {


    // Handler for .keydown() event on the input field
    $("#sterling-input").keydown(function (e) {

        // when the user hits 'enter' key inside the input field, execute the following
        if (e.keyCode == 13) {

            // prevent default action
            e.preventDefault();

            // the value in the input field
            var input = this.value;

            // validate user input
            var validation = Validator.validSterlingAmount(input);

            // if not valid
            if(validation.result == false){
                // display error message
                Interface.displayError(validation.message);
            } else {
                // convert user inputs to pennies
                var pennies = Parser.convertToPennies(input);

                // calculate the number of Sterling coins in the given input value
                var coins= Calculator.coinChangeMaker(pennies);

                // prepare results for output
                var results = Interface.prepareResults(input, coins);

                // display results
                Interface.displayResults(results);
            }
        }
    });

});



