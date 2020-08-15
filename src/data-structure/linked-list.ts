export class Node<T> {
  constructor(public element?: T, public next?: Node<T>) {}
}

export class DoublyNode<T> extends Node<T> {
  constructor(
    public element: T,
    public next?: DoublyNode<T>,
    public prev?: DoublyNode<T>
  ) {
    super(element, next)
  }
}

/*
export class LinkedList<T> {
  protected count = 0;
  protected head: Node<T> | undefined;

  constructor() {

  }

  prepend(element: T) {

  }

  append(element: T) {
    const node = new Node(element);

    if (this.head == null) {
      this.head = node;
    }
  }

  delete() {

  }

  isEmpty(): boolean {
    return false
  }

  size() {

  }

  getHead() {

  }
}
 */

export class LinkedList<T = number> {
  public count = 0

  constructor(public head?: Node<T>) {}

  last(): Node<T> {
    if (!this.head) return null
    let current = this.head

    while (current.next) {
      current = current.next
    }

    return current
  }

  push(element: T) {
    if (!this.head) {
      this.head = new Node(element)
      this.count++
    } else {
      let current = this.last()
      current.next = new Node(element)
      this.count++
    }
  }

  static create<T>(arr: T[]): LinkedList<T> {
    let i = 0
    const head = new Node(arr[i])
    let current = head

    while (++i < arr.length) {
      current.next = new Node(arr[i])
      current = current.next
    }
    return new LinkedList(head)
  }

  toArray() {
    let curr: Node<T> = this.head
    let result = [curr.element]

    while (curr.next) {
      curr = curr.next
      result.push(curr.element)
    }
    return result
  }

  join(div?: string) {
    return this.toArray().join(div)
  }
}
