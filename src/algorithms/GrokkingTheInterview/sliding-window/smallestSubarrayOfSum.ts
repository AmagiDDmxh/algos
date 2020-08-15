// smallest_subarray_with_given_sum

export const smallestSubarrayBruteForce = (s: number, arr: number[]) => {
  let min = Number.POSITIVE_INFINITY
  let changed = false

  for (let i = 0; i < arr.length; i++) {
    let sum = 0

    for (let j = i; j < arr.length; j++) {
      sum += arr[i]
      if (sum >= s) {
        if (!changed) {
          changed = true
        }
        min = Math.min(j - i + 1, min)
        break
      }
    }
  }

  if (changed) {
    return min
  }
  return 0
}

// 7 [2,1,5,2,3,2]
//        s e
// min = 3 ->
// sum = 2+1+5-2+2
export const smallestSubarray = (s: number, arr: number[]) => {
  let start = 0
  let min = Number.POSITIVE_INFINITY
  let sum = 0
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]

    while (sum >= s) {
      min = Math.min(end - start + 1, min)
      sum -= arr[start++]
    }
  }

  return min === Number.POSITIVE_INFINITY ? 0 : min
}
