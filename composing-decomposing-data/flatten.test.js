const flatten = require('./flatten')

test('flatten test', () => {
  expect(flatten(['foo', [3, 4, 5, [6, []]]])).toEqual(['foo', 3, 4, 5, 6])
})
