const leftVariadic = require('./left-variadic')

test('leftVariadic test', () => {
  const [butLast, last] = leftVariadic((butLast, last) => [butLast, last])(
    1,
    2,
    3,
    4,
    5
  )

  expect(butLast).toEqual([1, 2, 3, 4])
  expect(last).toBe(5)
})
