import { DoublyNode } from './linked-list'

/* type ICompareFunction<T> = (a: T, b: T) => number
class Comparator<T> {
  constructor(compareFunction: ICompareFunction<T> = Comparator.defaultCompareFunction) {

  }

  static defaultCompareFunction<T>(a: T, b: T) {
    if (a === b) {
      return 0
    }
    return a < b ? -1 : 1
  }
}

export class Tree<T> {
  private nodeComparator: Comparator<T>

  constructor(public value: T) {
    this.nodeComparator = new Comparator()
  }
}

export class BinaryTree<T> extends Tree<T> {
  private nodeValueComparator: Comparator<T>

  constructor(public value: T, compareFunction?: ICompareFunction<T>) {
    super(value)

    this.nodeValueComparator = new Comparator(compareFunction)
  }

  search(element: T, ) {
    const treeRoot = this.root
    if (treeRoot.element === element) {
      return treeRoot
    }

    if (element < treeRoot.element) {
      this.search
    }
  }
} */

export function search<T>(ele: T, root: DoublyNode<T>): DoublyNode<T> {
  if (!root || ele === root.element) return root

  if (ele < root.element) return search(ele, root.prev)
  return search(ele, root.next)
}

export function insert<T = number>(ele: T, root: DoublyNode<T>): DoublyNode<T> {
  const currentElement = root.element
  const nextString = ele < currentElement ? 'prev' : 'next'
  const nextNode = root[nextString]

  return nextNode
    ? insert(ele, nextNode)
    : (root[nextString] = new DoublyNode(ele))
}

export function remove<T = number>(ele: T, root: DoublyNode<T>): void {
  
  // 1. root has no children
  //   1.1 remove it self
  let node = root
  let nodeParent: DoublyNode<T> = null
  let nextString: 'next' | 'prev' = null
  
  while (node && node.element !== ele) {
    if (ele < node.element) {
      nodeParent = node
      node = node.prev
      nextString = 'prev'
    } else if (ele > node.element) {
      nodeParent = node
      node = node.next
      nextString = 'next'
    }
  }

  if (!node) {
    return
  }

  // if is the root and no children
  if (!nodeParent && (!node.prev && !node.next)) {
    return
  }

  // if its leaf itself
  if (!node.next && !node.prev) {
    if (nodeParent) {
      nodeParent[nextString] = null
    }
    return
  }

  // 2. root has one child
  //   2.1 is leaf so remove itself and replace chlid to itself
  //   2.2 not a leaf
  if ((node.prev && !node.next)) {
    if (nodeParent) {
      nodeParent[nextString] = node.prev
      return
    }
    node = node.prev
    return
  }

  if ((!node.prev && node.next)) {
    if (nodeParent) {
      nodeParent[nextString] = node.next
      return
    }
    node = node.next
    return
  }


  // 3. root has two children
  //   3.1 find the successor
  //     3.1.1 if successor has right tree
  //       3.1.1.1 replace the right tree with successor
  //     3.1.2 successor was the leftmost tree on the right
  let successor = node.next
  let successorParent = node
  
  while (successor.prev) {
    successorParent = successor
    successor = successor.prev
  }
  nodeParent[nextString].element = successor.element
  if (successor.next) {
    successorParent.next = successor.next
  } else {
    successorParent.next = null
  }
  return
}


/* 
  Reference from 'A Common Sense Guide to Data Structures and Algorithms' c12_p167-168 by Jay Wengrow
  recursive 
 */
export function deletion<T>(val: T, node: DoublyNode<T>): DoublyNode<T> {
  if (!node) {
    return node
  }

  if (val < node.element) {
    node.prev = deletion(val, node.prev)
    return node
  }
  if (val > node.element) {
    node.next = deletion(val, node.next)
    return node
  }

  // then it must be equal
  if (!node.prev) {
    return node.next
  }
  if (!node.next) {
    return node.prev
  } 

  node.next = lift(node.next, node)
  return node
}

function lift<T>(node: DoublyNode<T>, nodeToDelete: DoublyNode<T>): DoublyNode<T> {
  if (node.prev) {
    node.prev = lift(node.prev, nodeToDelete)
    return node
  }

  nodeToDelete.element = node.element
  return node.next
}

export function traverseInorder<T>(root: DoublyNode<T>) {
  let result: T[] = []

  if (root.prev) {
    result = result.concat(traverseInorder(root.prev))
  }

  result.push(root.element)

  if (root.next) {
    result = result.concat(traverseInorder(root.next))
  }

  return result
}
