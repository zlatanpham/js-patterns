var unary = require('./unary')

test('test unary by map & parseInt', () => {
  expect(['1', '2', '3'].map(unary(parseInt))).toEqual([1, 2, 3])
})
