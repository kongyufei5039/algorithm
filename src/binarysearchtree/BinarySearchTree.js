/**
 * 二叉搜索树
 */

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 中序遍历打印
  print() {
    let p = this.root
    if (p) {
      _print(p.left)
      console.log(p.data)
      _print(p.right)
    }

    function _print(p) {
      if (p) {
        _print(p.left)
        console.log(p.data)
        _print(p.right)
      }
    }
  }

  find(data) {
    let p = this.root
    while (p !== null) {
      if (data < p.data) {
        p = p.left
      } else if (data > p.data) {
        p = p.right
      } else {
        return p
      }
    }
    return null
  }

  // 插入 node
  insert(data) {
    const node = new Node(data)
    if (this.root === null) {
      this.root = node
      return
    }
    let p = this.root // p 指向根节点
    while (p) {
      if (data < p.data) {
        if (!p.left) {
          p.left = node
          return
        }
        p = p.left
      } else {
        if (!p.right) {
          p.right = node
          return
        }
        p = p.right
      }
    }
  }

  // 删除 node
  delete(data) {
    let p = this.root // p 指向要删除的节点，初始化指向根节点
    let pp = null // pp 记录 p 的父节点
    while (p !== null && p.data !== data) {
      pp = p
      if (data > p.data) {
        p = p.right
      } else {
        p = p.left
      }
    }
    if (p == null) return // 没有找到

    // 要删除的节点有两个子节点
    if (p.left !== null && p.right !== null) { // 查找右子树中的最小节点
      let minP = p.right
      let minPP = p // minPP 表示 minP 的父节点
      while (minP.left != null) {
        minPP = minP
        minP = minP.left
      }
      p.data = minP.data // 将 minP 的数据替换到 p 中
      p = minP // 下面就是要删除 minP 了
      pp = minPP
    }

    // 要删除的节点是叶子节点或者仅有一个子节点
    let child // p 的子节点
    if (p.left !== null) {
      child = p.left
    } else if (p.right !== null) {
      child = p.right
    } else {
      child = null
    }
    if (pp === null) {
      this.root = child // 删除根节点
    } else if (pp.left === p) {
      pp.left = child
    } else {
      pp.right = child
    }
  }
}

export default BinarySearchTree
