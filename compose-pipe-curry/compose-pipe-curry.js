function compose (...fns) {
  return fns.reduce((a, c) => (...args) => a(c(...args)))
}

function pipe (...fns) {
  return fns.reverse().reduce((a, c) => (...args) => a(c(...args)))
}

module.exports = {
  compose,
  pipe
}
