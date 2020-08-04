/* import { Comparator } from '../../comparators'

interface SortedCallbacks<T> {
  compareCallback(a: any, b: any): T
  visitingCallback(a: any): void
}

export default abstract class Sort<T> {
  callbacks: any
  comparator: Comparator

  constructor(originalCallbacks: SortedCallbacks<T>) {
    this.callbacks = Sort.initSortingCallbacks<T>(originalCallbacks)
    this.comparator = new Comparator(this.callbacks.compareCallback)
  }

  static initSortingCallbacks<T>(originalCallbacks?: SortedCallbacks<T>): SortedCallbacks<T> {
    return {
      compareCallback: originalCallbacks.compareCallback || undefined,
      visitingCallback: originalCallbacks.visitingCallback || (() => {})
    }
  }

  abstract sort(): never
}
 */
export { bubble, cocktailShaker } from './bubble'
export { selection, selectionAlternate } from './selection'
export { insertion, insertionAlternate } from './insertion'
export { count, count2 } from './count'
export { quick, partition } from './quick'
