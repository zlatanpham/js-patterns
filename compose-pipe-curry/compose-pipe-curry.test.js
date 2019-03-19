const { compose, pipe } = require('./compose-pipe-curry')

function add3 (num) {
  return num + 3
}

function multiply2 (num) {
  return num * 2
}

function minus4 (num) {
  return num - 4
}

test('test compose func', () => {
  expect(
    compose(
      minus4,
      add3,
      add3
    )(0)
  ).toBe(2)
})

test('test pipe func', () => {
  expect(
    pipe(
      add3,
      multiply2,
      minus4
    )(2)
  ).toBe(6)
})

test('test compose >< pipe func', () => {
  expect(
    compose(
      add3,
      multiply2,
      minus4
    )(2)
  ).toBe(-1)
})
