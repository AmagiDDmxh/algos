import { Node as ListNode } from '../../data-structure'

/* function h(a: number, b: number) {
  let sum = (a + b) % 10
  let carry = Math.floor(sum / 10)
  return [sum, carry]
} */

/* Simulation of 342 + 465 = 807
2 -> 4 -> 3
c1
5 -> 6 -> 4
c2
sum 7
root 7

2 -> 4 -> 3
    c1
5 -> 6 -> 4
    c2
sum 10
root 7 -> 0
sum' 1

2 -> 4 -> 3
          c1
5 -> 6 -> 4
          c2
sum 8
root 7 -> 0 -> 8
sum' 0
*/

/* 
Expected:
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    c1              c2
    sum = 7
    carry = 0
输出：7 -> 0 -> 8
原因：342 + 465 = 807

Special cases:
1. Different length: 123 + 456789
2. Sum has more digits: 50 + 50 = 100


*/
export function addTwoNumbers(l1: ListNode<number>, l2: ListNode<number>) {
  const dummy = new ListNode(0)

  let tail = dummy,
      sum = 0

  while (l1 ?? l2 ?? sum) {
    sum = (l1?.element ?? 0) + (l2?.element ?? 0) + sum
    tail.next = new ListNode(sum % 10)
    tail = tail.next
    sum = Math.floor(sum / 10)
    l1 = l1?.next
    l2 = l2?.next
  }
  return dummy.next
}

export function addTwoNumbersRecursive(l1: ListNode<number>, l2: ListNode<number>) {
  const sum = l1.element + l2.element
  l1.element = sum % 10
  if (l1.next || l2.next) {
    l1.next = l1.next ? l1.next : new ListNode()
    l2.next = l2.next ? l2.next : new ListNode()
    l1.next.element = sum > 9 ? l1.next.element + 1 : l1.next.element
    addTwoNumbers(l1.next, l2.next)
  } else {
    l2.element = 1
    l2.next = sum > 9 ? l2 : null
  }
  return l1
}
