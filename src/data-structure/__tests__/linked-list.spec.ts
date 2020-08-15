import { LinkedList, Node } from '../linked-list'

describe('Linked List', () => {
  it('should create from array', () => {
    const list = LinkedList.create([1, 2, 3, 4, 5])
    expect(list.join()).toEqual('1,2,3,4,5')
  })

  it('should not change the head node after push', () => {
    const list = new LinkedList(new Node(1))
    list.push(2)
    expect(list.head.element).toEqual(1)
  })
})
