export const lengthOfLongestSubstring = (str: string, k: number) => {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap: Map<string, number> = new Map();

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    const frequency =  (frequencyMap.get(rightChar) || 0) + 1
    frequencyMap.set(rightChar, frequency)
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequency);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      const leftChar = str[windowStart];
      frequencyMap.set(leftChar, frequencyMap.get(leftChar) - 1);
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
