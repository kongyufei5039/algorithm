/**
 * 冒泡、插入、选择、归并、快速排序
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

// 归并排序
const mergeSort = (arr) => {
  // 当任意数组分解到只有一个是返回
  if (arr.length <= 1) return arr
  const middle = Math.floor(arr.length / 2) // 找到中间值
  const left = arr.slice(0, middle) // 分割数组
  const right = arr.slice(middle)

  // 递归合并分解的数组
  return mergeArr(mergeSort(left), mergeSort(right))
}

const mergeArr = (left, right) => {
  let temp = [] // 临时数组，存放合并后的数组
  let leftIndex = 0
  let rightIndex = 0
  // 判断两数组中元素大小，依次插入数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      temp.push(left[leftIndex])
      leftIndex++
    } else {
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  // 合并多余的数组
  return [...temp, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

// 快速排序
const quickSort = (arr, left, right) => {
  if (left < right) {
    let pivot = right
    // 获取分区点
    let partitionIndex = partition(arr, pivot, left, right)
    // 递归排序左边部分
    quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
    // 递归排序右边部分
    quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
  }
}

// 获取 pivot 交换后的 index
const partition = (arr, pivot, left, right) => {
  const pivotVal = arr[pivot]
  let startIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotVal) {
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]]
      startIndex++
    }
  }
  [arr[startIndex], arr[pivot]] = [arr[pivot], arr[startIndex]]
  return startIndex
}

export { bubbleSort, insertionSort, selectionSort, mergeSort, quickSort }
