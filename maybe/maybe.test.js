const maybe = require('./maybe')

test('maybe test call', () => {
  expect(maybe((a, b, c) => a + b + c)(1, 2, 3)).toBe(6)
  expect(maybe((a, b, c) => a + b + c)(1, null, 3)).toBeUndefined()
})
