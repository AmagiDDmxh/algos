import { swap } from "src/common"

function partition(arr: number[], left: number, right: number) {
  const pivotPosition = right
  const pivot = arr[pivotPosition]
  right--

  while (true) {
    while (arr[left] < pivot) left++
    while (arr[right] >= pivot) right--

    if (left >= right) break

    swap(arr, left, right)
  }

  swap(arr, left, pivotPosition)
  return left
}

function quick(arr: number[], left = 0, right = arr.length - 1) {
  const result = arr.slice()

  function quickInner(arr: number[], left: number, right: number) {
    if (left < right) {
      const pivotPosition = partition(arr, left, right)

      quickInner(arr, left, pivotPosition - 1)
      quickInner(arr, pivotPosition + 1, right)
    }
  }

  quickInner(result, left, right)
  return result
}

function bubble(arr: number[]) {
  const result = arr.slice()

  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i < result.length; i++) {
      if (result[i - 1] > result[i]) {
        sorted = false
        swap(result, i - 1, i)
      }
    }
  }
  return result
}

