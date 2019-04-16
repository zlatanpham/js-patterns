module.exports = fn => {
  if (fn.length < 1) {
    return fn
  } else {
    return function(...args) {
      const gathered = args.slice(0, args.length - fn.length + 1)
      const spread = args.slice(args.length - fn.length + 1)

      return fn.apply(this, [gathered].concat(spread))
    }
  }
}
