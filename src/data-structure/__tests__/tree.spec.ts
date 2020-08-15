import { DoublyNode as BinaryTree } from '../linked-list'
import {
  // search,
  insert,
  traverseInorder,
  deletion,
} from '../tree'

describe('Binary Tree', () => {
  it('it should traverse tree', () => {
    const t = new BinaryTree(10)
    insert(5, t)
    insert(2, t)
    insert(7, t)
    insert(6, t)
    insert(8, t)
    insert(9, t)

    expect(traverseInorder(t).toString()).toEqual('2,5,6,7,8,9,10')
  })

  it('it should insert eles on tree', () => {
    const t1 = new BinaryTree(1)
    insert(2, t1)
    insert(3, t1)
    insert(4, t1)
    insert(5, t1)
    expect(t1.element).toEqual(1)
    expect(t1.next.element).toEqual(2)
    expect(t1.next.next.element).toEqual(3)
    expect(t1.next.next.next.element).toEqual(4)
    expect(t1.next.next.next.next.element).toEqual(5)

    expect(traverseInorder(t1).toString()).toEqual('1,2,3,4,5')
  })

  describe('tree deletion', () => {
    it('it should do nothing when no ele is in the tree', () => {
      const t = new BinaryTree(5)
      insert(3, t)
      insert(2, t)
      insert(6, t)

      expect(traverseInorder(t).toString()).toEqual('2,3,5,6')
      deletion(1, t)
      expect(traverseInorder(t).toString()).toEqual('2,3,5,6')
    })

    it('it should not remove tree when is itself and no children', () => {
      const t = new BinaryTree(5)
      deletion(5, t)
      expect(t).toBeDefined()
      expect(t.element).toEqual(5)
    })

    it('it should remove tree with one child correctly', () => {
      // on the left
      const t = new BinaryTree(3)
      insert(2, t)
      insert(1, t)

      expect(traverseInorder(t).toString()).toEqual('1,2,3')
      deletion(2, t)
      expect(traverseInorder(t).toString()).toEqual('1,3')

      // on the right
      const t2 = new BinaryTree(3)
      insert(1, t2)
      insert(2, t2)

      expect(traverseInorder(t2).toString()).toEqual('1,2,3')
      deletion(1, t2)
      expect(traverseInorder(t2).toString()).toEqual('2,3')
    })

    it('it should remove tree with two leaf children', () => {
      const t = new BinaryTree(2)
      insert(1, t)
      insert(3, t)

      expect(traverseInorder(t).toString()).toEqual('1,2,3')
      deletion(2, t)
      expect(traverseInorder(t).toString()).toEqual('1,3')
      expect(t.element).toEqual(3)
      expect(t.prev.element).toEqual(1)
    })

    it('it should remove tree with two children when the successor contains child', () => {
      const t = new BinaryTree(6)
      insert(2, t)
      insert(1, t)
      insert(3, t)
      insert(4, t)
      insert(5, t)

      expect(traverseInorder(t).toString()).toEqual('1,2,3,4,5,6')
      deletion(2, t)
      expect(traverseInorder(t).toString()).toEqual('1,3,4,5,6')
      expect(t.element).toEqual(6)
      expect(t.prev.element).toEqual(3)
      expect(t.prev.prev.element).toEqual(1)
      expect(t.prev.next.element).toEqual(4)
    })
  })
})
