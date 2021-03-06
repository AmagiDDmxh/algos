import { swap } from '../../common'

export const partition = (
  array: number[],
  left = 0,
  right: number = array.length - 1
) => {
  const pivotPos = right
  const pivot = array[pivotPos]

  right -= 1

  // Bug occur when they have the same value
  while (true) {
    while (array[left] < pivot) left++
    while (array[right] >= pivot) right--

    if (left >= right) {
      break
    } else {
      swap(array, left, right)
    }
  }

  swap(array, left, pivotPos)
  return left
}

export const quick = (array: number[]): number[] => {
  const result = array.slice()
  const left = 0
  const right = array.length - 1

  function quickHelper(arr: number[], left: number, right: number): void {
    if (left < right) {
      const pivotPos = partition(arr, left, right)

      quickHelper(arr, left, pivotPos - 1)
      quickHelper(arr, pivotPos + 1, right)
    }
  }

  quickHelper(result, left, right)
  return result
}

/* 
qh([4, 3, 2, 1], 0, 3)
  p: [1, 3, 2, 4] -> 0
  qh([1, 3, 2, 4], 0, 3)
    p: 1 3 2 4 -> 3
    qh(0, 2)
      p: 1 2 3 4 -> 1
      qh(0, 0) -> void
      qh(2, 2) -> void
    qh(4, 3) -> void
  qh(4, 3) -> void
 */
