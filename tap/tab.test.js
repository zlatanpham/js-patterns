const tap = require('./tab')

test('test tap with callback', () => {
  const fn = jest.fn()
  expect(tap({ name: 'bbb' }, fn)).toEqual({ name: 'bbb' })
  expect(fn).toHaveBeenCalled()
})

test('test tap with curry', () => {
  const fn = jest.fn()
  expect(tap({ name: 'bbb' })(fn)).toEqual({ name: 'bbb' })
  expect(fn).toHaveBeenCalled()
})
