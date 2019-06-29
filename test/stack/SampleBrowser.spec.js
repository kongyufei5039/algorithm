import assert from 'assert'
import { SampleBrowser } from '@/stack/SampleBrowser'

describe('基于栈实现浏览器的前进后退功能', () => {
  const browser = new SampleBrowser()
  it('浏览谷歌页面', () => {
    browser.pushNormal('www.google.com')
    assert.ok(true)
  })
  it('浏览百度页面', () => {
    browser.pushNormal('www.baidu.com')
    assert.ok(true)
  })
  it('浏览 github 页面', () => {
    browser.pushNormal('www.github.com')
    assert.ok(true)
  })
  it('后退', () => {
    browser.back()
    const { back, normal } = browser.displayAllStack()
    assert.equal(back.toString(), 'www.github.com')
    assert.equal(normal.toString(), 'www.baidu.com,www.google.com')
  })
  it('后退', () => {
    browser.back()
    const { back, normal } = browser.displayAllStack()
    assert.equal(back.toString(), 'www.baidu.com,www.github.com')
    assert.equal(normal.toString(), 'www.google.com')
  })
  it('前进', () => {
    browser.front()
    const { back, normal } = browser.displayAllStack()
    assert.equal(back.toString(), 'www.github.com')
    assert.equal(normal.toString(), 'www.baidu.com,www.google.com')
  })
  it('浏览新闻页', () => {
    browser.pushNormal('www.news.qq.com')
    const { back, normal } = browser.displayAllStack()
    assert.equal(back.toString(), '')
    assert.equal(normal.toString(), 'www.news.qq.com,www.baidu.com,www.google.com')
  })
})
