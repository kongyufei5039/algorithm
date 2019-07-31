import assert from 'assert'
import BinarySearchTree from '@/binarysearchtree/BinarySearchTree'

describe('二叉搜索树测试', () => {
  const binarySearchTree = new BinarySearchTree()
  it('二叉搜索树插入测试', () => {
    const insert = binarySearchTree.insert.bind(binarySearchTree)
    insert(23)
    insert(9)
    insert(39)
    insert(18)
    insert(20)
    insert(0)
    console.log('插入数据后打印 root 节点: 👇')
    binarySearchTree.print()
  })
  it('二叉搜索树查找测试', () => {
    const find = binarySearchTree.find.bind(binarySearchTree)
    const result = find(20)
    console.log('删除的节点: 👇')
    console.log(result)
  })
  it('二叉搜索树删除测试', () => {
    const _delete = binarySearchTree.delete.bind(binarySearchTree)
    const result = _delete(18)
    console.log('删除 18 后打印 root 节点: 👇')
    binarySearchTree.print()
  })
})
