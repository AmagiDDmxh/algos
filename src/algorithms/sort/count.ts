const max = (arr: number[]) => arr.reduce((pre, cur) => Math.max(pre, cur), 0)
const min = (arr: number[]) => arr.reduce((pre, cur) => Math.min(pre, cur), 0)

/* 
                 i
in  (1 4 1 2 7 5 2)

s   (0 2 2 0 1 1 0 1)
->  (0 2 4 4 5 6 6 7)
->  (0 1 4 4 5 6 6 7)
->  (0 1 4 4 4 6 6 7)
->  (0 0 4 4 4 6 6 7)
->  (0 0 3 4 4 6 6 7)
->  (0 0 3 4 4 6 6 6)
->  (0 0 3 4 4 5 6 6)
->  (0 0 2 4 4 5 6 6)

r   (0 0 0 0 0 0 0)
->  (0 1 0 0 0 0 0)
->  (0 1 0 0 4 0 0)
->  (1 1 0 0 4 0 0)
->  (1 1 0 2 4 0 0)
->  (1 1 0 2 4 0 7)
->  (1 1 2 2 4 5 7)

----
                      i
in (3 4 2 1 0 0 4 3 4 2)

i   0 1 2 3 4
s  (2 1 2 2 3)
-> (2 3 5 7 10)
-> (2 3 5 6 10)
-> (2 3 5 6 9)
-> (2 3 4 6 9)
-> ...
-> (0 2 3 5 7)
    
i   0 1 2 3 4 5 6 7 8 9
r  (0 0 0 0 0 0 0 0 0 0)
-> (0 0 0 0 0 0 3 0 0 0)
-> (0 0 0 0 2 0 3 0 0 4)
-> ...
-> (0 0 1 3 2 3 3 4 4 4)

 */

// now it do only work for non-negative integer
export function count(arr: number[]) {
  const store = new Int8Array(max(arr) - min(arr) + 1)
  const output = []

  // store the number
  for (const n of arr) {
    store[n]++
  }

  for (let i = 1; i < store.length; i++) {
    store[i] += store[i-1]
  }

  for (let i = 0; i < arr.length; i++) {
    output[store[arr[i]] - 1] = arr[i]
    store[arr[i]]--
  }
  
  
  return output
}

export function count2(arr: number[]) {
  if (arr.length < 2) return arr

  const l = min(arr)
  const h = max(arr)
  const store = new Int8Array(h - l + 1)
  const output = []

  // console.log(store)

  for (const n of arr) {
    store[n - l]++
  }

  // console.log(store)
  
  for (let index = 0; index < store.length; index++) {
    while (store[index] !== 0) {
      output.push(index)
      store[index]--
    }
  }

  // console.log(store, '-> ', output)
  return output
}
