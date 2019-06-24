/**
 * 1）单链表的插入、删除、查找操作
 * 2）链表中存储 任意 类型数据
 */

class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  // 根据 value 查找节点
  findByValue (item) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode === null ? -1 : currentNode
  }

  // 根据 index 查找节点，下标从 0 开始
  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode  = currentNode.next
      pos++
    }
    return currentNode === null ? -1 : currentNode
  }

  // 向链表末尾追加节点
  append (newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  // 指定元素向后插入
  insert (newElement, element) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  // 查找前一个
  findPrev (item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next == null) {
      return -1
    }
    return currentNode
  }

  // 根据值删除
  remove (item) {
    const prevNode = this.findPrev(item)
    if (prevNode === -1) {
      return
    }
    prevNode.next = prevNode.next.next
  }

  // 遍历显示所有节点
  display () {
    let currentNode = this.head.next // 忽略头指针的值
    const arr = []
    while (currentNode !== null) {
      arr.push(currentNode.element)
      currentNode = currentNode.next
    }
    return arr
  }
}
