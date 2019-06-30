/**
 * 冒泡、插入、选择排序
 */
const bubbleSort = (arr) => {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length; i++) {
    let hasChange = false
    for (let j = 0; j < arr.length - i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        hasChange = true
      }
    }
    if (!hasChange) break
  }
  return arr
}

// 插入排序
const insertionSort = (arr) => {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    // 若 arr[i] 前有大于 arr[i] 的值，向后移位，腾出空间，直到 <= arr[i]
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr
}

// 选择排序
const selectionSort = (arr) => {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

export { bubbleSort, insertionSort, selectionSort }
