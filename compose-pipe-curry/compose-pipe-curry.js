function compose (...fns) {
  return fns.reduce((a, c) => (...args) => a(c(...args)))
}

module.exports = {
  compose
}
