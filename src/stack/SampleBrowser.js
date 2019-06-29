/**
 * 使用前后栈实现浏览器的前进后退功能
 */

import { StackBasedLinkedList } from './StackBasedOnLinkedList'

export class SampleBrowser {
  constructor() {
    this.normalStack = new StackBasedLinkedList()
    this.backStack = new StackBasedLinkedList()
  }

  //  正常浏览页面
  pushNormal(name) {
    this.normalStack.push(name)
    this.backStack.clear()
  }

  // 后退
  back() {
    const value = this.normalStack.pop()
    if (value === -1) return alert('无法后退')
    this.backStack.push(value)
  }

  // 前进
  front() {
    const value = this.backStack.pop()
    if (value === -1) return alert('无法前进')
    this.normalStack.push(value)
  }

  // 打印栈内数据
  displayAllStack() {
    return {
      // 后退页面
      back: this.backStack.display(),
      // 浏览页面
      normal: this.normalStack.display()
    }
  }
}
