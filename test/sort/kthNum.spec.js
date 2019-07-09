import assert from 'assert'
import kthNum from '@/sort/kthNum'

describe('求数组中第K大元素', () => {
  const tempArr = [232,43534,321,535,231,5322,12,543,12,67,863,753]
  it('测试结果为', () => {
    assert.equal(kthNum(tempArr, 10), 863)
  })
})
