/**
 * 第 K 大的数
 * @param {array} array
 * @param {number} k
 */

const kthNum = (arr, k) => {
  const len = arr.length
  if (k > len) {
    return -1
  }
  let p = partition(arr, 0, len - 1)
  while (p + 1 !== k) {
    if (p + 1 > k) {
      p = partition(arr, 0, p - 1)
    } else {
      p = partition(arr, p + 1, len - 1)
    }
  }
  return arr[p]
}

const partition = (arr, start, end) => {
  let i = start
  const pivot = arr[end]
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]]
  return i
}

export default kthNum
