/**
 * 二分查找
 * 有序数组，有重复元素。
 */

// 查找第一个等于给定值的索引
const binaryFindFirst = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target < sortedArr[mid]) {
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      low = mid + 1
    } else {
      if (mid === 0 || sortedArr[mid - 1] !== target) return mid
      high = mid - 1
    }
  }
  return -1
}

// 查找最后一个等于给定值的索引
const binaryFindLast = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target < sortedArr[mid]) {
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      low = mid + 1
    } else {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] !== target) return mid
      low = mid + 1
    }
  }
  return -1
}

// 查找第一个大于等于给定值的索引
const binaryFindFistBig = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target <= sortedArr[mid]) {
      if (mid === 0 || sortedArr[mid - 1] < target) return mid
      high = mid - 1
    } else if (target > sortedArr[mid]) {
      low = mid + 1
    }
  }
  return -1
}

// 查找最后一个小于等于给定值的索引
const binaryFindLastSmall = (sortedArr, target) => {
  if (sortedArr.length === 0) return -1
  let low = 0
  let high = sortedArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target >= sortedArr[mid]) {
      if (mid === sortedArr.length - 1 || sortedArr[mid + 1] > target) return mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

export { binaryFindFirst, binaryFindLast, binaryFindFistBig, binaryFindLastSmall }
