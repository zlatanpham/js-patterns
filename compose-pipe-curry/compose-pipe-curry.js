function compose(...fns) {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument')
  }
  return fns.reduce((a, c) => (...args) => a(c(...args)))
}

function pipe(...fns) {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument')
  }
  return fns.reverse().reduce((a, c) => (...args) => a(c(...args)))
}

function curry(fn, ...args) {
  return fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more)
}

module.exports = {
  compose,
  pipe,
  curry
}
