/**
 * 基于链表实现的循环队列
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class CircularQueue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.head.next = this.head
      this.tail = this.head
    } else {
      const flag = this.head = this.tail
      this.tail.next = new Node(value)
      this.tail.next.next = this.head
      this.tail = this.tail.next
      if (flag) {
        this.head.next = this.tail
      }
    }
  }

  dequeue() {
    if (this.head === this.tail) {
      const value = this.head.element
      this.head = null
      return value
    } else if (this.head !== null) {
      const value = this.head.element
      this.head = this.head.next
      this.tail.next = this.head
      return value
    } else {
      return -1
    }
  }

  display() {
    let flag = true
    let currentNode = this.head
    const arr = []
    while (currentNode !== null && flag) {
      currentNode = currentNode.next
      if (currentNode === this.head) {
        flag = false
      }
      arr.push(currentNode.element)
    }
    return arr
  }
}
