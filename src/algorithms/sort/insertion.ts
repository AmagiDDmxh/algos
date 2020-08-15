import { swap } from '../../common'

function swappable<T>(a: T, b: T, comp: (a: T, b: T) => boolean) {
  const swapCondition = a !== undefined && comp(a, b)
  return swapCondition
}

/* 
First Pass
(**4 3 2 1)
Second Pass
(4 *3 2 1) -> (3 *4 2 1)
Third Pass
(3 4 *2 1) -> (3 2 *4 1) -> (2 3 *4 1)
Fourth Pass
(2 3 4 *1) -> (2 3 1 *4) -> (2 1 3 *4) -> (1 2 3 *4)

*/
export function insertion<T>(arr: Array<T>, comp = (a: T, b: T) => a > b) {
  const newArr = [...arr]

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i; swappable(newArr[j - 1], newArr[j], comp); j--) {
      swap<T>(newArr, j, j - 1)
    }
  }

  return newArr
}

/* 
First Pass
(4 *3 2 1) -> (*4 4 2 1) -> (3 4 2 1)
temp 3

Second Pass
(3 4 *2 1) -> (3 *4 4 1) -> (*3 3 4 1) -> (2 3 4 1)
temp 2

Third
(2 3 4 *1) -> (2 3 *4 4) -> (2 *3 3 4) -> (*2 2 3 4) -> (1 2 3 4)
temp 1
----

1.
(4 *2 1 3) -> (*4 4 1 3) -> (*2 4 1 3)
temp 2

2.
(2 4 *1 3) -> (2 *4 4 3) -> (*2 2 4 3) -> (1 2 4 3)
tmep 1

3.
(1 2 4 *3) -> (1 2 *4 4) -> (1 2 3 4)
temp 3
 */
export function insertionAlternate<T>(arr: Array<T>) {
  const result = arr.slice()
  for (let i = 1; i < result.length; i++) {
    let position = i
    const temp = result[position]
    while (position > 0 && result[position - 1] > temp) {
      result[position] = result[position - 1]
      position--
    }
    result[position] = temp
  }
  return result
}
