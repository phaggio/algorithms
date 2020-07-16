// #121
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction 
// (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Input: [7,1,5,3,6,4]
// Output: 5 (max profit)

// Input: [7,6,4,3,1]
// Output: 0

const maxProfit = prices => {
  if (!prices || prices.length < 2) return 0;

  let min = prices[0]
  let max = prices[0]
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] < min) {
      min = prices[i];
      max = min;
    }
    else if (prices[i] > max && (prices[i] - min) > profit) {
      max = prices[i];
      profit = max - min;
    }
  }

  return profit;
}


export default maxProfit