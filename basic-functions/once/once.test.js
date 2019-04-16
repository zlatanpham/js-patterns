const once = require('./once')

test('once test call', () => {
  const shouldBeCalledOnce = function() {
    return 'called'
  }

  const wrapper = once(shouldBeCalledOnce)

  expect(wrapper()).toBe('called')
  expect(wrapper()).toBeUndefined()
})
