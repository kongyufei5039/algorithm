import assert from 'assert'
import { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort } from '@/sort/Sort.js'

describe('冒泡排序测试', () => {
  const arr = [3, 23, 321, 1, 23, 34]
  it('数组排序后输出结果', () => {
    assert.equal(bubbleSort(arr), '1,3,23,23,34,321')
  })
})

describe('插入排序测试', () => {
  const arr = [3, 23, 321, 1, 23, 34]
  it('数组排序后输出结果', () => {
    assert.equal(insertionSort(arr), '1,3,23,23,34,321')
  })
})

describe('选择排序测试', () => {
  const arr = [3, 23, 321, 1, 23, 34]
  it('数组排序后输出结果', () => {
    assert.equal(selectionSort(arr), '1,3,23,23,34,321')
  })
})

describe('归并排序测试', () => {
  const arr = [3, 23, 321, 1, 23, 34]
  it('数组排序后输出结果', () => {
    assert.equal(mergeSort(arr), '1,3,23,23,34,321')
  })
})

describe('快速排序测试', () => {
  const arr = [3, 23, 321, 111, 23, 34]
  it('数组排序后输出结果', () => {
    quickSort(arr, 0, arr.length - 1)
    assert.equal(arr, '3,23,23,34,111,321')
  })
})
