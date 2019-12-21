function Observer() {
  this.handlers = []
}

Observer.prototype = {
  subscribe: function(fn) {
    this.handlers.push(fn)
  },
  unsubcribe: function(fn) {
    this.handlers = this.hjndlers.filter(function(item) {
      return item !== fn
    })
  },
  fire: function(o, thisObj) {
    var scope = thisObj || window
    this.handlers.forEach(function(item) {
      item.call(scope, o)
    })
  }
}

module.exports = Observer
