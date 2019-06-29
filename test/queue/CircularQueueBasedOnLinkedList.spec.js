import assert from 'assert'
import { QueueBasedOnLinkedList } from '@/queue/QueueBasedOnLinkedList'

describe('基于链表的循环队列测试', () => {
  const queue = new QueueBasedOnLinkedList()
  it("插入元素", () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    assert.equal(queue.display().toString(), '1,2,3')
  })
  it("弹出元素", () => {
    assert.equal(queue.dequeue().toString(), '1')
    assert.equal(queue.display().toString(), '2,3')
  })
})
