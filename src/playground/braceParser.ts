const braceEnums: {[brace: string]: string} = {
  '{': '}',
  '[': ']',
  '(': ')',
  '}': '{',
  ']': '[',
  ')': '(',
}

function parse(str: string) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isOpening(char)) {
      stack.push(char)
    } else if (isClosing(char)) {
      if (isLastClose(char, stack)) {
        stack.pop()
      } else {
        throw new Error(`#3`)
      }
    }
  }

  if (stack.length) {
    throw new Error(`#1`)
  }
}

function isOpening(char: string) {
  return ['{', '[', '('].includes(char)
}

function isClosing(char: string) {
  return ['}', ']', ')'].includes(char)
}

function isLastClose(char: string, stack: string[]) {
  return stack[stack.length - 1] === braceEnums[char]
}
