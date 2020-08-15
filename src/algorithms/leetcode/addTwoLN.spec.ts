import { addTwoNumbers } from './addTwoLN'
import { Node, LinkedList } from '../../data-structure'

describe('addTwoNumbers', () => {
  it('Should have correct value on same length LN', () => {
    // FIXME:
    // const l1 = LinkedList.create([2, 4, 3])
    // const l2 = LinkedList.create([5, 6, 4])
    // const result = addTwoNumbers(l1, l2).toArray()
    // console.log(result)
    // expect(result).toEqual([7, 0, 8])
  })

  it('Different length but no carry around', () => {
    // FIXME:
    // 123 + 1234 = 1357
    // const l1 = LinkedList.create([3, 2, 1])
    // const l2 = LinkedList.create([4, 3, 2, 1])
    // const result = addTwoNumbers(l1, l2).toArray()
    // expect(result).toEqual([7, 5, 3, 1])
  })

  it('Different length and carrys around', () => {
    // 13 + 8 = 21
    const l1 = new Node(3, new Node(1))
    const l2 = new Node(8)

    const result = new LinkedList(addTwoNumbers(l1, l2)).join()
    expect(result).toEqual('1,2')
  })

  /* it('Should be correct when sum has more digits', () => {

  }) */
})
