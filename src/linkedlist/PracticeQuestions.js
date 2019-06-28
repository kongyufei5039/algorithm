/**
 * 1）单链表反转
 * 2）链表中环的检测
 * 3）合并两个有序的链表
 * 4）删除链表倒数第 n 个节点
 * 5）求链表的中间节点
 */

import { Node, LinkedList } from './SingleLinkedList'

export default class PracticeQuestions extends LinkedList {
  constructor() {
    super()
  }

  // 尾插法 反转单链表
  reverseList() {
    const root = new Node('head')
    let currentNode = this.head.next
    while (currentNode !== null) {
      const next = currentNode.next
      currentNode.next = root.next
      root.next = currentNode
      currentNode = next
    }
    this.head = root
  }

  // 环监测
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (slow == fast) return true
    }
    return false
  }

  // 删除倒数第 k 个节点
  removeByIndexFromEnd(index) {
    // 务必先判断是否是 环链表
    if (this.checkCircle()) return false
    let pos = 1
    this.reverseList()
    let currentNode = this.head.next
    while (currentNode !== null && pos < index) {
      currentNode = currentNode.next
      pos++
    }
    if (currentNode === null) {
      return false
    }
    this.remove(currentNode.element)
    this.reverseList()
  }

  // 求中间节点
  findMiddleNode() {
    let fast = this.head.next
    let slow = this.head.next
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  // 合并两个有序链表
  mergeSortedLists(listA, listB) {
    if (!listA) return listB
    if (!listB) return listA

    let a = listA.head.next
    let b = listB.head.next
    let resultList
    if (a.element < b.element) {
      resultList = a
      a = a.next
    } else {
      resultList = b
      b = b.next
    }
    let currentNode = resultList
    while (a !== null && b !== null) {
      if (a.element < b.element) {
        currentNode.next = a
        a = a.next
      } else {
        currentNode.next = b
        b = b.next
      }
      currentNode = currentNode.next
    }

    if (a !== null) {
      currentNode.next = a
    } else {
      currentNode.next = b
    }
    return resultList
  }
}

