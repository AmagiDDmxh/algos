import { swap } from '../../common'

/*
  
 */
export function selection(arr: number[]) {
  if (!arr.length) return arr

  const result = arr.slice()

  for (let i = 0; i < result.length; i++) {
    let tempIndex = i
    for (let j = i + 1; j < result.length; j++) {
      if (result[j] < result[tempIndex]) {
        tempIndex = j
      }
    }
    if (tempIndex !== i) {
      swap(result, i, tempIndex)
    }
  }
  return result
}


/* 
  FIXME: This don't work
 */
export function selectionAlternate(arr: number[]) {
  if (!arr.length) return arr
  
  const result: Array<number> = []

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
      }
    }
    result.push(min)
  }
  return result
}
