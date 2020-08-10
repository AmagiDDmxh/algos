export class Queue<T> {
  private queue: Map<number, T>
  private index: number
  private count: number

  constructor() {
    this.queue = new Map()
    this.index = 0
    this.count = 0
  }

  enqueue(element: T) {
    this.queue.set(this.count++, element)
  }

  dequeue() {
    if (this.isEmpty()) return undefined

    const element = this.queue.get(this.index)
    this.queue.delete(this.index)
    this.index++

    return element
  }

  front() {
    if (this.isEmpty()) return undefined

    return this.queue.get(this.index)
  }

  isEmpty() {
    return this.queue.size === 0
  }

  get size() {
    return this.count - this.index
  }

  toString(div = ',') {
    if (this.isEmpty()) return ''

    let str = `${this.queue.get(this.index)}`

    for (let i = this.index + 1; i < this.count; i++) {
      str += `${div}${this.queue.get(i)}`
    }
    return str
  }
}
