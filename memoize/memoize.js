module.exports = function(fn) {
  var cache = {}
  return function(...args) {
    var key = JSON.stringify(args)
    var result = (cache[key] = cache[key] || fn(...args))
    return result
  }
}
