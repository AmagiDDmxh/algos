const findPermutation = (str: string, pattern: string) => {
  let start = 0,
    matched = 0,
    map = new Map();
  
  for (const char of pattern) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (let end = 0; end < str.length; end++) {
    const char = str[end]
    const frequency = map.get(char)
    if (frequency !== undefined) {
      map.set(char, frequency - 1)
      if (map.get(char) === 0) {
        matched += 1
      }
    }

    if (matched === map.size) {
      return true
    }

    if (end >= pattern.length - 1) {
      const startChar = str[start++]
      const frequency = map.get(startChar)
      if (frequency !== undefined) {
        if (frequency === 0) {
          matched -= 1
        }
        map.set(startChar, frequency + 1)
      }
    }
  }

  return false
}
