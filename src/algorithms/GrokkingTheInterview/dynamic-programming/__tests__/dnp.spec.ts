import { solveKnapsack } from '../intro'

describe('Dynamic Chapter', () => {
  it('Solve the knapsack problem', () => {
    expect(solveKnapsack([4, 5, 3, 7], [2, 3, 1, 4], 5)).toEqual(10)
    expect(solveKnapsack([1, 6, 10, 16], [1, 2, 3, 5], 7)).toEqual(22)
  })
})