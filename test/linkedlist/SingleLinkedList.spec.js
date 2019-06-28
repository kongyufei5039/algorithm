const assert = require('assert')
import { LinkedList } from '@/linkedlist/SingleLinkedList.js'

const LList = new LinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao')

describe("链表初始化数据", () => {
  it("链表数据：chen -> curry -> sang -> zhao", () => {
    assert.equal(LList.display().join(' -> '), 'chen -> curry -> sang -> zhao')
  })
})

describe('根据 value 查找节点', () => {
  it("LList.findByValue('curry') 结果为：curry", () => {
    assert.equal(LList.findByValue('curry').element, 'curry')
  })
})

describe('根据 index 查找节点', () => {
  it("LList.findByIndex(2) 结果为：curry", () => {
    assert.equal(LList.findByIndex(2).element, 'curry')
  })
})

describe('链表插入数据', () => {
  it("LList.insert('qian', 'chen')、LList.insert('zhou', 'zhao') 后结果为：chen -> qian -> curry -> sang -> zhao -> zhou", () => {
    LList.insert('qian', 'chen')
    LList.insert('zhou', 'zhao')
    assert.equal(LList.display().join(' -> '), 'chen -> qian -> curry -> sang -> zhao -> zhou')
  })
})

describe('链表删除数据', () => {
  it("LList.remove('curry') 后结果为：chen -> qian -> sang -> zhao -> zhou", () => {
    LList.remove('curry')
    assert.equal(LList.display().join(' -> '), 'chen -> qian -> sang -> zhao -> zhou')
  })
})

describe('与头结点同值元素测试', () => {
  it("LList.insert('head', 'sang') 后结果为：chen -> qian -> sang -> head -> zhao -> zhou", () => {
    LList.insert('head', 'sang')
    assert.equal(LList.display().join(' -> '), 'chen -> qian -> sang -> head -> zhao -> zhou')
  })
  it("LList.findPrev('head') 结果为：sang", () => {
    assert.equal(LList.findPrev('head').element, 'sang')
  })
  it("LList.remove('head') 后结果为：chen -> qian -> sang -> zhao -> zhou", () => {
    LList.remove('head')
    assert.equal(LList.display().join(' -> '), 'chen -> qian -> sang -> zhao -> zhou')
  })
})
