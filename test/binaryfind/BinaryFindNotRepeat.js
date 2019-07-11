import assert from 'assert'
import binaryFind from '@/binaryfind/BinaryFindNotRepeat.js'

describe('二分查找，有序数组无重复元素测试', () => {
  const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
  it('查找 56 的索引结果为: 12', () => {
    assert.equal(binaryFind(arr, 56), 12)
  })
})
