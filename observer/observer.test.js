const Observer = require('./observer')

it('observer', function() {
  const bucket = {
    amount: 1,
    add: function(num) {
      this.amount = this.amount + num
    },
    minus: function(num) {
      this.amount = this.amount - num
    }
  }

  const observer = new Observer()
  observer.subscribe(bucket.add)
  observer.subscribe(bucket.add)

  expect(bucket.amount).toBe(1)

  observer.fire(2, bucket)

  expect(bucket.amount).toBe(5)
})
