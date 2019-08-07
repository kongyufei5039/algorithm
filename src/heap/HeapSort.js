/**
 * 堆排序
 */

class HeapSort {
  constructor(arr) {
    this.originArray = arr
  }

  // 建堆
  buildHeap() {
    // 数组从下标 1 开始
    const arr = [undefined, ...this.originArray]
    const startIndex = Math.floor(arr.length / 2)
    for (let i = startIndex; i >= 1; --i) {
      this.heapify(arr, arr.length, i)
    }
    return arr
  }

  // 从下往上堆化
  heapify(arr, len, i) {
    while (true) {
      let maxPos = i
      // 如果 i 拥有左叶子节点 并且左叶子节点较大
      if (i * 2 <= len && arr[i] < arr[i * 2]) {
        maxPos = i * 2
      }
      // 如果 i 拥有右叶子节点 并且右叶子节点较大
      if (i * 2 + 1 <= len && arr[maxPos] < arr[i * 2 + 1]) {
        maxPos = i * 2 + 1
      }
      if (maxPos === i) break // i 为最大节点时退出循环
      // arr[i, maxPos] = arr[maxPos, i] // 交换 i 与最大节点
      this.swap(arr, i, maxPos)
      i = maxPos // i 为最大节点，循环查找更大值
    }
  }

  sort() {
    const arr = this.buildHeap() // 先建堆
    console.log(...arr)
    let len = arr.length - 1
    while (len > 1) {
      this.swap(arr, 1, len) // 交换堆顶元素和最后一位，堆顶元素永远是最大的。
      len--
      this.heapify(arr, len, 1) // 剩下的元素重新堆化，直到 len === 1 停止
    }
    return arr.slice(1)
  }

  swap(arr, x, y) {
    const temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
  }
}

export default HeapSort
