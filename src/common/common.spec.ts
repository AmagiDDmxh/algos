import { shuffle } from './index'

const aSimpleArray = [3, 4, 2, 1, 0, 0, 4, 3, 4, 2]
const sortedArr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]

describe('Common utils', () => {
  it('shuffle', () => {
    const fromSimple = shuffle(aSimpleArray)
    const fromSortedArr = shuffle(sortedArr)

    expect(fromSimple.length).toBe(10)
    expect(fromSortedArr.length).toBe(20)

    expect(fromSimple).not.toBe(aSimpleArray)
    expect(fromSortedArr).not.toEqual(sortedArr)
  })
})
