const { foldWith } = require('./folding')

test('test foldWith', () => {
  expect(
    foldWith((number, rest) => number * number + rest, 0, [1, 2, 3, 4, 5])
  ).toBe(55)
})
