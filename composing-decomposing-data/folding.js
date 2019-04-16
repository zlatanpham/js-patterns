const foldWith = (fn, terminalValue, [first, ...rest]) =>
  first === undefined
    ? terminalValue
    : fn(first, foldWith(fn, terminalValue, rest))

module.exports = {
  foldWith
}
