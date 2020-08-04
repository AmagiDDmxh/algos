export const makeFlat = (recursive: boolean = false) => 
  <T>(arr: T[], result: T[] = []) => {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        if (recursive) {
          flatten(element, result)
        } else {
          for (const el of element)
            result.push(el)
        }
      }
      else {
        result.push(element)
      }
    }
    return result
  }

export const flatten = makeFlat(true)
export const flatOne = makeFlat()


export const flatmapA = <T, O = any>(
  fn: (value: T, index: number, array: T[]) => O, 
  arr: T[]
) => {
  return flatOne(arr.map(fn))
}



export const remove = <T>(arr: T[], x: T) => {
  return arr.filter(item => item !== x)
}

export const permutations = <T>(s: T[]) => {
  return s
}
