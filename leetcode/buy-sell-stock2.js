// #122

// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. 
// You may complete as many transactions as you like 
//(i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time 
// (i.e., you must sell the stock before you buy again).

const maxProfit = prices => {
  if (!prices || prices.length < 2) return 0;

  let min = prices[0];
  let max = min;

  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] < min) {
      min = prices[i];
      max = min;
    } else if (prices[i] > max) {
      max = prices[i];
      profit += prices[i] - prices[i - 1]
    } else if (prices[i] < max) {
      min = prices[i];
      max = min;
    }
  }
  return profit;
}

export default maxProfit