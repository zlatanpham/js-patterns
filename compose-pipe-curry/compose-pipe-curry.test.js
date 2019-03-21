const { compose, pipe, curry } = require('./compose-pipe-curry')
const assert = require('assert')

describe('compose', function () {
  it('is variadic function', function () {
    expect(typeof compose).toBe('function')
    expect(compose).toHaveLength(0)
  })

  // it('performs right-to-left function composition', function () {
  //   // f :: (String, Number?) -> ([Number] -> [Number])
  //   var f = compose(;)
  //
  // })

  // it('passes context to functions', function () {
  //   function x (val) {
  //     return this.x * val
  //   }
  //   function y (val) {
  //     return this.y * val
  //   }
  //   function z (val) {
  //     return this.z * val
  //   }
  //   var context = {
  //     a: compose(x, y, z),
  //     x: 4,
  //     y: 2,
  //     z: 1
  //   }
  //   expect(context.a(5)).toBe(40)
  // })

  it('throws if given no arguments', function () {
    assert.throws(
      function () { compose() },
      function (err) {
        return err.constructor === Error && err.message === 'compose requires at least one argument'
      }
    )
  })

  it('can be appliced to one argument', function () {
    var f = function (a, b, c) { return [a, b, c] }
    var g = compose(f)
    expect(g).toHaveLength(3)
    expect(g(1, 2, 3)).toEqual([1, 2, 3])
  })
})

describe('pipe', function () {
  it('it is variadic function', function () {
    expect(typeof pipe).toBe('function')
    expect(pipe).toHaveLength(0)
  })

  it('performs left-to-right function composition', function () {
    function add1 (n) {
      return n + 1
    }
    function minus2 (n) {
      return n - 2
    }
    function multiply3 (n) {
      return n * 3
    }
    expect(pipe(add1, minus2, multiply3)(1)).toBe(0)
  })

  it('throws if given no arguments', function () {
    assert.throws(
      function () { pipe() },
      function (err) {
        return err.constructor === Error && err.message === 'compose requires at least one argument'
      }
    )
  })

  it('can be appliced to one argument', function () {
    var f = function (a, b, c) { return [a, b, c] }
    var g = compose(f)
    expect(g).toHaveLength(3)
    expect(g(1, 2, 3)).toEqual([1, 2, 3])
  })
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
