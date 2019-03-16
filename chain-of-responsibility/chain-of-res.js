var Request = function(amount) {
  this.amount = amount;
};

Request.prototype = {
  add: function(amount) {
    this.amount += amount;
    return this;
  },
  subtract: function(amount) {
    this.amount -= amount;
    return this;
  }
};

module.exports = Request;
