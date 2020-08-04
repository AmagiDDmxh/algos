export const solveKnapsack = (profits: number[], weights: number[], capacity: number) => {
  function knapsackRecursive(profits: number[], weights: number[], capacity: number, currentIndex = 0): number {
    // console.log(profits, weights, capacity, currentIndex)
    
    if (capacity <= 0 || currentIndex >= profits.length) {
      return 0
    }

    let firstProfit = 0
    if (weights[currentIndex] <= capacity) {
      firstProfit = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
    }
    // console.log('first profit', firstProfit, currentIndex)

    const secondProfit = knapsackRecursive(profits, weights, capacity, currentIndex + 1)
    // console.log('second profit', secondProfit, currentIndex)

    return Math.max(firstProfit, secondProfit)
  }
  return knapsackRecursive(profits, weights, capacity)
}

export const solveKnapsackMemo = (profits: number[], weights: number[], capacity: number) => {
  const dp: number[][] = []
  function knapsackRecursive(profits: number[], weights: number[], capacity: number, currentIndex = 0): number {
    // console.log(profits, weights, capacity, currentIndex)
    
    if (capacity <= 0 || currentIndex >= profits.length) {
      return 0
    }

    dp[currentIndex] = dp[currentIndex] || []
    if (typeof dp[currentIndex][capacity] !== "undefined") {
      return dp[currentIndex][capacity]
    }

    let firstProfit = 0
    if (weights[currentIndex] <= capacity) {
      firstProfit = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
    }
    // console.log('first profit', firstProfit, currentIndex)

    const secondProfit = knapsackRecursive(profits, weights, capacity, currentIndex + 1)
    // console.log('second profit', secondProfit, currentIndex)

    dp[currentIndex][capacity] = Math.max(firstProfit, secondProfit)
    return dp[currentIndex][capacity]
  }
  return knapsackRecursive(profits, weights, capacity)
}
/* 
  profits [1 6 10 16]
  weights [1 2 3 5]
  capacity 7
  k(7, 0)
  max(1 + k(6, 1), k(7, 1))
  max(1 + max(6 + k(4, 2)), k(7, 1))
  max(1 + max(6 + max(10 + k(1, 3)), k(4, 3)), k(7, 1))
  max(1 + max(6 + max(10 + max()), k(4, 3)), k(7, 1))
*/