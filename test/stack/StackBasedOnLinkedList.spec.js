const assert = require('assert')
import { StackBasedLinkedList } from '@/stack/StackBasedOnLinkedList.js'

describe('基于链表实现的栈测试', () => {
  const stack = new StackBasedLinkedList()

  it('链表 push 后结果为：3,2,1', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    assert.equal(stack.display().toString(), '3,2,1')
  })
  it('链表 pop 结果为：3', () => {
    assert.equal(stack.pop(), '3')
  })
})
