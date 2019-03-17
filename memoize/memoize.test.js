var memoize = require('./memoize')

test('test memoize with single primative number', () => {
  function plusPlus(number){
    return number + 1;
  }
  
  var memoizedPlusPlus = memoize(plusPlus);

  expect(memoizedPlusPlus(1)).toBe(2)
  expect(memoizedPlusPlus(3)).toBe(4)
})

test('test memoize with spread arguments', () => {
  function multiply(multiplier, ...args) {
    return args.map(function (element) {
      return multiplier * element;
    })
  }

  var memoizedMultiply = memoize(multiply);

  expect(memoizedMultiply(2, 1, 2, 3)).toEqual([2, 4, 6])
  expect(memoizedMultiply(4, 2, 5, 8)).toEqual([8, 20, 32])
})

