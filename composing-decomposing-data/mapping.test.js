const { squareAll, truthyAll, mapWith } = require('./mapping')

test('squareAll test', () => {
  expect(squareAll([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25])
})

// test('truthyAll test', () => {
//   expect(truthyAll(null, true, void 0, 1, 'true')).toEqual([
//     false,
//     true,
//     false,
//     true,
//     true
//   ])
// })

test('mapWidth test', () => {
  expect(mapWith(x => x + 1, [1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 6])
})
