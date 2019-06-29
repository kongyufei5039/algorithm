/**
 * 基于链表实现的栈
 */

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

export class StackBasedLinkedList {
  constructor() {
    this.top = null
  }

  push(value) {
    const node = new Node(value)
    if (this.top === null) {
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
  }

  pop() {
    if (this.top === null) {
      return -1
    }
    const value = this.top.element
    this.top = this.top.next
    return value
  }

  // 为了实现浏览器的前进后退
  clear() {
    this.top = null
  }

  display() {
    const arr = []
    if (this.top !== null) {
      let temp = this.top
      while (temp !== null) {
        arr.push(temp.element)
        temp = temp.next
      }
    }
    return arr
  }
}
