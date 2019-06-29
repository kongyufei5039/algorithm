/**
 * 冒泡、选择、插入排序
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

export { bubbleSort }
