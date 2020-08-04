import {
  insertion, 
  insertionAlternate,
  bubble, 
  cocktailShaker, 
  selection,
  // selectionAlternate,
  count,
  count2,
  partition,
  quick
} from '..'

export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

describe('Sorting sets', () => {
  it('insertion sort should sort array', () => {
    expect(insertion([])).toEqual([]);
    expect(insertion([1])).toEqual([1]);
    expect(insertion([1, 2])).toEqual([1, 2]);
    expect(insertion([2, 1])).toEqual([1, 2]);
    expect(insertion([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(insertion(sortedArr)).toEqual(sortedArr);
    expect(insertion(reverseArr)).toEqual(sortedArr);
    expect(insertion(notSortedArr)).toEqual(sortedArr);
    expect(insertion(equalArr)).toEqual(equalArr);
  })

  it('insertion sort with comparator should sort array', () => {
    const comp = (a: number, b: number) => b > a
    expect(insertion([], comp)).toEqual([]);
    expect(insertion([1], comp)).toEqual([1]);
    expect(insertion([1, 2], comp)).toEqual([2, 1]);
    expect(insertion([2, 1], comp)).toEqual([2, 1]);
    expect(insertion([3, 4, 2, 1, 0, 0, 4, 3, 4, 2], comp)).toEqual([4, 4, 4, 3, 3, 2, 2, 1, 0, 0]);
    expect(insertion(sortedArr, comp)).toEqual(reverseArr);
    expect(insertion(reverseArr, comp)).toEqual(reverseArr);
    expect(insertion(notSortedArr, comp)).toEqual(reverseArr);
    expect(insertion(equalArr, comp)).toEqual(equalArr);
  })

  it('insertion alternate sort should sort array', () => {
    expect(insertionAlternate([])).toEqual([]);
    expect(insertionAlternate([1])).toEqual([1]);
    expect(insertionAlternate([1, 2])).toEqual([1, 2]);
    expect(insertionAlternate([2, 1])).toEqual([1, 2]);
    expect(insertionAlternate([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(insertionAlternate(sortedArr)).toEqual(sortedArr);
    expect(insertionAlternate(reverseArr)).toEqual(sortedArr);
    expect(insertionAlternate(notSortedArr)).toEqual(sortedArr);
    expect(insertionAlternate(equalArr)).toEqual(equalArr);
  })

  // BubbleSort = n^2 + n = O(n)
  it('bubble sort should sort array', () => {
    expect(bubble([])).toEqual([]);
    expect(bubble([1])).toEqual([1]);
    expect(bubble([1, 2])).toEqual([1, 2]);
    expect(bubble([2, 1])).toEqual([1, 2]);
    expect(bubble([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(bubble(sortedArr)).toEqual(sortedArr);
    expect(bubble(reverseArr)).toEqual(sortedArr);
    expect(bubble(notSortedArr)).toEqual(sortedArr);
    expect(bubble(equalArr)).toEqual(equalArr);
  })

  it('cocktail shaker sort should sort array', () => {
    expect(cocktailShaker([])).toEqual([]);
    expect(cocktailShaker([1])).toEqual([1]);
    expect(cocktailShaker([1, 2])).toEqual([1, 2]);
    expect(cocktailShaker([2, 1])).toEqual([1, 2]);
    expect(cocktailShaker([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(cocktailShaker(sortedArr)).toEqual(sortedArr);
    expect(cocktailShaker(reverseArr)).toEqual(sortedArr);
    expect(cocktailShaker(notSortedArr)).toEqual(sortedArr);
    expect(cocktailShaker(equalArr)).toEqual(equalArr);
  })

  // SelectionSort = n(n+1)/2 - 1
  it('selection sort should sort array', () => {
    expect(selection([])).toEqual([]);
    expect(selection([1])).toEqual([1]);
    expect(selection([1, 2])).toEqual([1, 2]);
    expect(selection([2, 1])).toEqual([1, 2]);
    expect(selection([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(selection(sortedArr)).toEqual(sortedArr);
    expect(selection(reverseArr)).toEqual(sortedArr);
    expect(selection(notSortedArr)).toEqual(sortedArr);
    expect(selection(equalArr)).toEqual(equalArr);
  })

  /* it('selection alternate sort should sort array', () => {
    expect(selectionAlternate([])).toEqual([]);
    expect(selectionAlternate([1])).toEqual([1]);
    expect(selectionAlternate([1, 2])).toEqual([1, 2]);
    expect(selectionAlternate([2, 1])).toEqual([1, 2]);
    expect(selectionAlternate([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(selectionAlternate(sortedArr)).toEqual(sortedArr);
    expect(selectionAlternate(reverseArr)).toEqual(sortedArr);
    expect(selectionAlternate(notSortedArr)).toEqual(sortedArr);
    expect(selectionAlternate(equalArr)).toEqual(equalArr);
  }) */

  it('count sort should sort array', () => {
    expect(count([])).toEqual([]);
    expect(count([1])).toEqual([1]);
    expect(count([1, 2])).toEqual([1, 2]);
    expect(count([2, 1])).toEqual([1, 2]);
    expect(count([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(count(sortedArr)).toEqual(sortedArr);
    expect(count(reverseArr)).toEqual(sortedArr);
    expect(count(notSortedArr)).toEqual(sortedArr);
    expect(count(equalArr)).toEqual(equalArr);
  })

  it('count2 sort should sort array', () => {
    expect(count2([])).toEqual([]);
    expect(count2([1])).toEqual([1]);
    expect(count2([1, 2])).toEqual([1, 2]);
    expect(count2([2, 1])).toEqual([1, 2]);
    expect(count2([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(count2(sortedArr)).toEqual(sortedArr);
    expect(count2(reverseArr)).toEqual(sortedArr);
    expect(count2(notSortedArr)).toEqual(sortedArr);
    expect(count2(equalArr)).toEqual(equalArr);
  })

  it('quick sort should work', () => {
    const arr = [0, 5, 2, 1, 6, 3]
    partition(arr)
    expect(arr).toEqual([0, 1, 2, 3, 6, 5])
    const input = [3, 2, 1, 0]
    expect(quick(input)).toEqual([0, 1, 2, 3])
    expect(input).toEqual([3, 2, 1, 0])
    expect(quick([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
    expect(quick([0, 5, 2, 1, 6, 3])).toEqual([0, 1, 2, 3, 5, 6])
    expect(quick([])).toEqual([]);
    expect(quick([1])).toEqual([1]);
    expect(quick([1, 2])).toEqual([1, 2]);
    expect(quick([2, 1])).toEqual([1, 2]);
    expect(quick([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);

    expect(quick(sortedArr)).toEqual(sortedArr);
    expect(quick(reverseArr)).toEqual(sortedArr);
    expect(quick(notSortedArr)).toEqual(sortedArr);
    expect(quick(equalArr)).toEqual(equalArr);
  })
})
