/**
 * Created by Mahmoud on 21/01/2018.
 */
/**
 * Object holding functionality to calculate the minimum number of Sterling coins needed to make up a given number of pennies.
 */
var Calculator = {

    /**
     * Array of coins values to be used in the calculation
     * where 200 is the £2 coin, and 100 is the £1 coin
     */
    sterlingCoins: [200, 100, 50, 20, 10, 5, 2, 1],

    /**
     * method to calculate the minimum number of coins needed to make up a certain number of pennies
     * @param {Integer} pennies, the number of pennies provided as input from the user
     * @returns {Object} results, an object containing the coins and quantities of each of them.
     */
    numberOfCoins: function(pennies) {

        // sort the coins array in descending order:
        this.sterlingCoins.sort(function(a, b){return b-a});

        /**
         * coin holds the value of the current coin,
         * results holds the coins needed to make up the amount with the quantities needed of each of them.
         */
        var coin, results = {};

        // the index of the coin under study
        var i = 0;

        // While the amount of pennies is not zero
        while(pennies!=0){

            // get the value of the next coin in the coins array
            coin = this.sterlingCoins[i++];

            // if the amount holds the value of one or more of the coin under study
            if(pennies >= coin){

                // add the number of coins to the results object
                results[coin] = this.coinCounter(pennies,coin);

                // update the value of the remaining pennies
                pennies = this.remaining(pennies,coin);
            }
        }
        return results;
    },

    /**
     * returns the number of specific coin in a specific amount of pennies
     * @param {Integer} pennies, is the number of pennies under study
     * @param {Integer} coin, is the value of the coin under study
     * @returns {Integer} representing the number of coins in the amount of pennies provided as input
     */
    coinCounter: function(pennies, coin) {
        return Math.floor(pennies / coin);
    },

    /**
     * Calculates the number of the pennies remaining after calculating the number of a specific coin in giving number of pennies
     * @param {Integer} pennies, the number of pennis under study
     * @param {Integer} coin, the value of coin under study
     * @returns {Integer} representing the number of remaining pennies.
     */
    remaining: function(pennies, coin) {
        return pennies % coin;
    }
};