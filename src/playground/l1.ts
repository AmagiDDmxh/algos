// x1 > x2; f(x1) - f(x2) > 0 or < 0
//
function mono(nums: number[]) {
  let oddity = 0
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1]
    const curr = nums[i]

    if (oddity === -1) {
      if (curr > prev) return false
    }

    if (oddity === 1) {
      if (curr < prev) return false
    }

    if (curr > prev) {
      oddity = 1
    }
    if (curr < prev) {
      oddity = -1
    }
  }
  return true
}

const input1 = [0, -2, 1]
const input2 = [3, 2, 1]
const input3 = [1, 2, 3]
const input4 = [1, 2, 2, 3]
const input5 = [2, 2, 3]

mono(input1)
mono(input2)
mono(input3)
mono(input4) // -> true
mono(input5) // -> true
