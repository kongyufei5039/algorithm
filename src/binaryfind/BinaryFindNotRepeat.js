/**
 * 二分查找
 * 数据有序，不存在重复的元素
 */

const binaryFind = (sorteArr, target) => {
  if (sorteArr.length === 0) return -1
  let low = 0
  let high = sorteArr.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (target < sorteArr[mid]) {
      high = mid - 1
    } else if (target > sorteArr[mid]) {
      low = mid + 1
    } else if (sorteArr[mid] === target) {
      return mid
    }
  }
  return -1
}

export default binaryFind
