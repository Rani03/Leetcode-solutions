/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let minPrice = Infinity; // Initialize the minimum price to a very large value
  let maxProfit = 0; // Initialize the maximum profit to 0

  // Loop through each day's price
  for (let i = 0; i < prices.length; i++) {
    // Update the minimum price if the current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate the potential profit if selling on the current day
    const potentialProfit = prices[i] - minPrice;
    // Update the maximum profit if the potential profit is greater
    maxProfit=Math.max(maxProfit, potentialProfit);
    // if (potentialProfit > maxProfit) {
    //   maxProfit = potentialProfit;
    // }
  }

  return maxProfit;
    
};