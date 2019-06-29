/**
 * 基于链表实现的队列
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class QueueBasedOnLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // 入队
  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
  }

  // 出队
  dequeue() {
    if (this.head !== null) {
      const value = this.head.element
      this.head = this.head.next
      return value
    } else {
      return -1
    }
  }
  
  // 显示队列
  display() {
    let currentNode = this.head
    const arr = []
    while (currentNode !== null) {
      arr.push(currentNode.element)
      currentNode = currentNode.next
    }
    return arr
  }
}
