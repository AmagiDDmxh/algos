/*
  For a given array, return the average of all the 
  contiguous subarrays of size 'K' in it
  
  Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
  Output: [2.2, 2.8, 2.4, 3.6, 2.8]
  2.2 = (1 + 3 + 2 + 6 + -1) / 5
  2.8 = (3 + 2 + 6 + -1 + 4) / 5
  ...


 */

const edgeTest: (K: number, arr: number[]) => boolean = (K, arr) =>
  K < 0 || K >= arr.length

// First by brute force
export function finderBruteForce(K: number, arr: number[]) {
  if (edgeTest(K, arr)) return []

  const result = []
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0
    for (let j = i; j < i + K; j++) {
      sum += arr[j]
    }
    result.push(sum / K)
  }
  return result
}

export function finderSliding(K: number, arr: number[]) {
  if (edgeTest(K, arr)) return []

  const result = []
  let sum = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]

    if (windowEnd >= K - 1) {
      result.push(sum / K)
      sum -= arr[windowStart]
      windowStart++
    }
  }

  return result
}
