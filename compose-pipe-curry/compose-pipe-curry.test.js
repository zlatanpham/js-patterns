const { compose } = require('./compose-pipe-curry')

function add3 (num) {
  return num + 3
}

test('test compose func', () => {
  expect(
    compose(
      add3,
      add3,
      add3
    )(0)
  ).toBe(9)
})
