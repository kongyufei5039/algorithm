import assert from 'assert'
import { binaryFindFirst, binaryFindLast, binaryFindFistBig, binaryFindLastSmall } from '@/binaryfind/BinaryFindRepeat.js'

describe('二分查找，有序数组有重复元素', () => {
  const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
  it ('查找第一个与给定值 4 相等的索引结果为：3', () => {
    assert.equal(binaryFindFirst(arr, 4), 3)
  })
  it ('查找最后一个与给定值 4 相等的索引结果为：7', () => {
    assert.equal(binaryFindLast(arr, 4), 7)
  })
  it ('查找第一个大于等于给定值 5 的索引结果为：8', () => {
    assert.equal(binaryFindFistBig(arr, 5), 8)
  })
  it ('产找最后一个小于等于给定值 6 的索引结果为：7', () => {
    assert.equal(binaryFindLastSmall(arr, 5), 7)
  })
})
