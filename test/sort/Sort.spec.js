import assert from 'assert'
import { bubbleSort } from '@/sort/Sort.js'

describe('冒泡排序测试', () => {
  const arr = [3, 23, 321, 1, 23, 34]
  it('数组排序后输出结果', () => {
    assert.equal(bubbleSort(arr), '1,3,23,23,34,321')
  })
})
