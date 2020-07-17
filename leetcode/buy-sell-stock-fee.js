// #714

// Your are given an array of integers prices, 
// for which the i-th element is the price of a given stock on day i; 
// and a non-negative integer fee representing a transaction fee.

// You may complete as many transactions as you like, 
// but you need to pay the transaction fee for each transaction. 
// You may not buy more than 1 share of a stock at a time 
// (ie. you must sell the stock share before you buy again.)

// Return the maximum profit you can make.

// const maxProfit = (prices, fee) => {
//   if (!prices || prices.length < 2) return 0;

//   let profit = 0;
//   let state = -prices[0]

//   // at each price point, we need to check max profit up to that point. 
//   for (let i = 1; i < prices.length; ++i) {
//     // max profit could have up to this point
//     profit = Math.max(profit, prices[i] + state - fee);

//     // at each point, we also check whether purchasing the stock at this price point would yield higher profit
//     // money after purchasing the stock at this time
//     // logic is, if the price point is lower than the previous sold price minus fee
//     // , then we should buy it because net profit is higher
//     state = Math.max(state, profit - prices[i]);
//   }
//   return profit;
// }


const maxProfit = (prices, fee) => {
  if (!prices || prices.length < 2) return 0;

  let min = prices[0];
  let max = min;
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {

    // if price is less than max price minus fee up to this point, the we should execute the sale
    if (prices[i] < (max - fee) && max > min + fee) {
      profit += (max - min - fee);
      // reset min & max at this point
      min = prices[i];
      max = min;
    }
    // if price point continues to go up above current max, set max to that current price
    else if (prices[i] > max) {
      max = prices[i];
    }
    // if price point continues to go down below current min, set min to that price point
    // need to set max equal to min as well because we cannot sell it at the previous max point.
    else if (prices[i] < min) {
      min = prices[i];
      max = min;
    }
  }

  // if the last price point happen to be higher and profitable
  // , this is the last check to make sure we execute the sale
  if (max - min > fee) {
    profit += max - min - fee;
  }

  return profit;
}


export default maxProfit