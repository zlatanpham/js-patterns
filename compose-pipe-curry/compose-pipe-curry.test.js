const { compose, pipe, curry } = require('./compose-pipe-curry')

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

test('test curry func', () => {
  function add (a, b) {
    return a + b
  }

  var curryAdd = curry(add)

  expect(curryAdd(1)(2)).toBe(3)
})

describe('curry', function () {
  it('curries a single value', function () {
    var f = curry(function (a, b, c, d) { return (a + b * c) / d })
    // f(12, 3, 6, 2) == 15
    expect(f(12, 3, 6, 2)).toBe(15)
  })

  it('curries multiple values', function () {
    var f = curry(function (a, b, c, d) { return (a + b * c) / d })
    // f(12, 3, 6, 2) == 15
    var g = f(12, 3)
    expect(g(6, 2)).toBe(15)
    var h = f(12, 3, 6)
    expect(h(2)).toBe(15)
  })

  it('allows further currying of a curried function', function () {
    var f = curry(function (a, b, c, d) { return (a + b * c) / d })
    // f(12, 3, 6, 2) == 15
    var g = f(12)
    expect(g(3, 6, 2)).toBe(15)
    var h = g(3)
    expect(h(6, 2)).toBe(15)
    expect(g(3, 6)(2)).toBe(15)
  })

  // it('properly reports the length of the curried function', function () {
  //   var f = curry(function (a, b, c, d) { return (a + b * c) / d })
  //   expect(f).toHaveLength(4)
  //   var g = f(12)
  //   expect(g).toHaveLength(3)
  //   var h = g(3)
  //   expect(h).toHaveLength(2)
  //   expect(g(3, 6)).toHaveLength(1)
  // })

  // it('perserves contexts', function () {
  //   var ctx = { x: 10 }
  //   var f = function (a, b) { return a + b * this.x }
  //   var g = curry(f)

  //   expect(g.call(ctx, 2, 4)).toBe(42)
  //   expect(g.call(ctx, 2)).call(ctx, 4).toBe(42)
  // })
})
