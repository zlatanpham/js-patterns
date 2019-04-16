module.exports = fn => {
  let done = false
  return function() {
    return done ? void 0 : ((done = true), fn.apply(this, arguments))
  }
}
