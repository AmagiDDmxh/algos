export function maxSubarray(array: number[], k: number) {
  let start = 0
  let sum = 0
  let max = 0
  for (let end = 0; end < array.length; end++) {
    sum += array[end]

    if (end >= k - 1) {
      max = Math.max(sum, max)
      sum -= array[start++]
    }
  }
  return max
}
