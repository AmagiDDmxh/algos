export function swap<T>(arr: Array<T>, a: number, b: number) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

export function shuffle(arr: number[]) {
  const output = arr.slice()
  let length = output.length - 1

  for (; length >= 0; length--) {
    const r = Math.floor(Math.random() * (length + 1))
    swap(output, length, r)
  }

  return output
}

