// https://leanpub.com/javascriptallongesix/read#leanpub-auto-unary
// “Unary” is a function decorator that modifies the number of arguments a function takes: Unary takes any function and turns it into a function taking exactly one argument.

var unary = function(fn) {
  return fn.length === 1
    ? fn
    : function(something) {
        return fn.call(this, something)
      }
}

module.exports = unary
