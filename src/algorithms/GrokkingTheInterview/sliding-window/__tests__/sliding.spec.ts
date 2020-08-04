import { finderBruteForce, finderSliding } from '../intro'
import { maxSubarray } from '../maxSubarray'
import { 
  // smallestSubarrayBruteForce, 
  smallestSubarray 
} from '../smallestSubarrayOfSum'
import { 
  myLongestSubstringWithKDistinctCharacters, 
  longestSubstringWithKDistinctCharacters
} from '../longestSubstringWithKDistinctCharacters'
import {
  lengthOfLongestSubstring
} from '../LongestSubstringWithSameLettersAfterReplacement'


describe('Using sliding method', () => {
  const input = [1, 3, 2, 6, -1, 4, 1, 8, 2]
  const K = 5

  describe('get average number of subarray with size K', () => {
    it('brute force should work', () => {
      const expectedResult = [2.2, 2.8, 2.4, 3.6, 2.8]
      expect(finderBruteForce(K, input)).toEqual(expectedResult)
    })

    it('sliding method should work', () => {
      const expectedResult = [2.2, 2.8, 2.4, 3.6, 2.8]
      expect(finderSliding(K, input)).toEqual(expectedResult)
    })
  })

  it('maxSubarray should gets the maximum sum', () => {
    expect(maxSubarray([2, 1, 5, 1, 3, 2], 3)).toEqual(9)
    expect(maxSubarray(input, K)).toEqual(18)
  })

  describe('smallest_subarray_with_given_sum', () => {
    // it('brute force', () => {
    //   expect(smallestSubarrayBruteForce(7, [2, 1, 5, 2, 3, 2])).toEqual(2)
    //   expect(smallestSubarrayBruteForce(7, [2, 1, 5, 2, 8])).toEqual(1)
    //   expect(smallestSubarrayBruteForce(8, [3, 4, 1, 1, 6])).toEqual(3)
    // })

    it('sliding should work', () => {
      expect(smallestSubarray(7, [2, 1, 5, 2, 3, 2])).toEqual(2)
      expect(smallestSubarray(7, [2, 1, 5, 2, 8])).toEqual(1)
      expect(smallestSubarray(8, [3, 4, 1, 1, 6])).toEqual(3)
    })
  })

  describe('Longest substring with K distinct characters', () => {
    type Input = [string, number]
    const input1: Input = ['araaci', 2]    
    const input2: Input = ['araaci', 1]
    const input3: Input = ['cbbebi', 3]

    it('myLongestSubstringWithKDistinctCharacters should work', () => {
      expect(myLongestSubstringWithKDistinctCharacters(...input1)).toEqual(4)
      expect(myLongestSubstringWithKDistinctCharacters(...input2)).toEqual(2)
      expect(myLongestSubstringWithKDistinctCharacters(...input3)).toEqual(5)
    })

    it('LongestSubstringWithKDistinctCharacters should work', () => {
      expect(longestSubstringWithKDistinctCharacters(...input1)).toEqual(4)
      expect(longestSubstringWithKDistinctCharacters(...input2)).toEqual(2)
      expect(longestSubstringWithKDistinctCharacters(...input3)).toEqual(5)
    })
  })

  it('Longest substring ith same letters after replacement', () => {
    expect(lengthOfLongestSubstring('aabccbb', 2)).toEqual(5)
    expect(lengthOfLongestSubstring('abbcb', 1)).toEqual(4)
    expect(lengthOfLongestSubstring('abccde', 1)).toEqual(3)
  })
})
