import { swap } from '../../common'

/* 
First Pass.
(*4 3* 2 1) -> (*3 4* 2 1)
(3 *4 2* 1) -> (3 *2 4* 1)
(3 2 *4 1*) -> (3 2 *1 4*)

Second Pass.
(*3 2* 1 4) -> (*2 3* 1 4)
(2 *3 1* 4) -> (2 *1 3* 4)
*/
export function bubble(arr: number[]) {
  if (!arr.length) return arr

  const result = arr.slice()
  let offset = 0
  let sorted = false

  while (!sorted) {
    sorted = true
    for (let i = 1; i < result.length - offset; i++) {
      if (result[i - 1] > result[i]) {
        swap(result, i, i - 1)
        sorted = false
      }
    }
    offset += 1
  }
  return result
}

export function cocktailShaker(arr: number[]) {
  if (!arr.length) return arr

  const result = arr.slice()
  let n = result.length

  while (n > 1) {
    let newn = 0
    for (let i = 1; i < n; i++) {
      if (result[i - 1] > result[i]) {
        swap(result, i, i - 1)
        newn = i
      }
    }
    n = newn
  }
  return result
}
