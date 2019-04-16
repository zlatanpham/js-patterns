var squareAll = ([first, ...rest]) =>
  first === undefined ? [] : [first * first, ...squareAll(rest)]

// const truthyAll = ([first, ...rest]) =>
//   first === undefined ? [] : [!!first, ...truthyAll(rest)]

var mapWith = (fn, [first, ...rest]) =>
  first === undefined ? [] : [fn(first), ...mapWith(fn, rest)]

module.exports = {
  squareAll,
  mapWith
}
