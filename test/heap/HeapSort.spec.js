import assert from 'assert'
import HeapSort from '@/heap/HeapSort'

describe('堆排序测试', () => {
  const arr = []
  let i = 0
  while(i < 10) {
    arr.push(Math.floor(Math.random() * 10))
    i++
  }
  console.log(...arr)
  const heapSort = new HeapSort(arr)
  it ('堆排序测试', () => {
    console.log(heapSort.sort())
  })
})
