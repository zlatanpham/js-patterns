var Request = require('./chain-of-res');

test('test chain of responsibility pattern', function() {
  var request = new Request(20);
  expect(request.add(20).subtract(49).amount).toBe(-9);
});
