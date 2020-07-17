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
//     profit = Math.max(profit, prices[i] + state - fee); // max profit could have up to this point
//     state = Math.max(state, profit - prices[i]); // money after purchasing the stock at this time
//   }


//   return profit;
// }


const maxProfit = (prices, fee) => {
  if (!prices || prices.length < 2) return 0;

  let min = prices[0];
  let max = min;
  let profit = 0;

  for (let i = 1; i < prices.length; ++i) {

    if (prices[i] < (max - fee) && max > min + fee) {
      profit += (max - min - fee);
      min = prices[i];
      max = min;
    } else if (prices[i] > max) {
      max = prices[i];
    } else if (prices[i] < min) {
      min = prices[i];
      max = min;
    }
  }

  if (max - min > fee) {
    profit += max - min - fee;
  }

  return profit;
}


export default maxProfit