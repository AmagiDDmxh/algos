export class Node<T> {
  constructor(
    public element?: T,
    public next?: Node<T>
  ) { }

  public toArray = LinkedList.prototype.toArray
}

export class DoublyNode<T> extends Node<T> {
  constructor(
    public element: T, 
    public next?: DoublyNode<T>, 
    public prev?: DoublyNode<T>
  ) {
    super(element, next);
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
  constructor(
    public element: T,
    public next?: LinkedList<T>
  ) { }

  static create<T>(arr: T[]): LinkedList<T> {
    let i = 0
    const head = new LinkedList(arr[i])
    let tail = head

    while (++i < arr.length) {
      tail.next = new LinkedList(arr[i])
      tail = tail.next
    }
    return head
  }

  toArray() {
    let curr: LinkedList<T> = this
    let result = [curr.element]

    while (curr.next) {
      curr = curr.next
      result.push(curr.element)
    }
    return result
  }

  join(div: string = ',') {
    return this.toArray().join(div)
  }
}
