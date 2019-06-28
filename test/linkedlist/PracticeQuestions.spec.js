const assert = require('assert')
import PracticeQuestions from '@/linkedlist/PracticeQuestions'

const PQList = new PracticeQuestions()
PQList.insert('chen', 'head')
PQList.insert('curry', 'chen')
PQList.insert('sang', 'head')
PQList.insert('zhao', 'head')

describe('单链表反转', () => {
  it("PQList.reverseList() 后结果为：curry -> chen -> sang -> zhao", () => {
    PQList.reverseList()
    assert.equal(PQList.display().join(' -> '), 'curry -> chen -> sang -> zhao')
  })
})

describe('链表中环的检测', () => {
  it("PQList.checkCircle() 结果为：true", () => {
    PQList.findByValue('zhao').next = PQList.findByValue('head')
    assert.equal(PQList.checkCircle(), true)
  })
  it("PQList.checkCircle() 结果为：false", () => {
    PQList.findByValue('zhao').next = null
    assert.equal(PQList.checkCircle(), false)
  })
})

describe('删除倒数第 n 个节点', () => {
  it("PQList.removeByIndexFromEnd(2) 后结果为：curry -> chen -> zhao", () => {
    PQList.removeByIndexFromEnd(2)
    assert.equal(PQList.display().join(' -> '), 'curry -> chen -> zhao')
  })
})

describe('求链表中的中间节点', () => {
  it("链表的中间节点为：chen", () => {
    assert.equal(PQList.findMiddleNode().element, 'chen')
  })
})

describe('合并两个有序的链表', () => {
  const sortedList1 = new PracticeQuestions()
  sortedList1.insert(9, 'head')
  sortedList1.insert(8, 'head')
  sortedList1.insert(7, 'head')
  sortedList1.insert(6, 'head')

  const sortedList2 = new PracticeQuestions()
  sortedList2.insert(21, 'head')
  sortedList2.insert(20, 'head')
  sortedList2.insert(19, 'head')
  sortedList2.insert(18, 'head')

  it("合并后结果为：6 -> 7 -> 8 -> 9 -> 18 -> 19 -> 20 -> 21", () => {
    let sortedList = PQList.mergeSortedLists(sortedList1, sortedList2)
    let listArr = []
    while (sortedList !== null) {
      listArr.push(sortedList.element)
      sortedList = sortedList.next
    }
    assert.equal(listArr.join(' -> '), '6 -> 7 -> 8 -> 9 -> 18 -> 19 -> 20 -> 21')
  })
})
