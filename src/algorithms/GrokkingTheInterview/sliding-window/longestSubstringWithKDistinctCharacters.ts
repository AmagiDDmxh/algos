
function distinctCharacter(str: String) {
  return new Set(str.split('')).size
}

// input araaci, 2
// output 4, the longest substring which is 'araa'
// possible substring
// 1. araa
// 2. raa
// 3. aac
// 4. ac
// 5. ci

// input araaci 1
// output 2
// possible substring
// a, r, aa, c, i

export function myLongestSubstringWithKDistinctCharacters(str: String, K: number) {
  // let start = 0
  let max = Number.NEGATIVE_INFINITY
  let store = ''

  for (let end = 0; end < str.length; end++) {
    const currentCharacter = str[end]
    const nextCharacter = str[end + 1]
    store += currentCharacter

    while (!store.includes(nextCharacter) && distinctCharacter(store) >= K) {
      max = Math.max(max, store.length)
      store = store.slice(1)
    }
  }
  return max
  // return max === Number.NEGATIVE_INFINITY ? 0 : max
}

export function longestSubstringWithKDistinctCharacters(str: String, K: number) {
  let start = 0
  let max = Number.NEGATIVE_INFINITY
  let store = new Map()

  for (let end = 0; end < str.length; end++) {
    const currentCharacter = str[end]
    const storeNumber = store.get(currentCharacter) + 1 
    store.set(currentCharacter, storeNumber || 1)

    while (store.size > K) {
      const startCharacter = str[start++]
      store.set(startCharacter, store.get(startCharacter) - 1)
      if (store.get(startCharacter) === 0) {
        store.delete(startCharacter)
      }
    }
    max = Math.max(max, end - start + 1)
  }
  return max
}

// console.log(myLongestSubstringWithKDistinctCharacters('araaci', 2));
