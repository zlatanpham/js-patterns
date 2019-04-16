module.exports = fn =>
  function(...args) {
    if (args.length === 0) {
      return
    } else {
      for (let arg of args) {
        if (arg == null) return
      }
      return fn.apply(this, args)
    }
  }
