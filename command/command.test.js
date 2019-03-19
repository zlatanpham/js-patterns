var calculator = require('./command')

test('run without trouble', () => {
  var cal = calculator()

  cal.add(2)
  cal.add(2)
  cal.undo()
  cal.add(4)
  cal.subtract(4)
  cal.redo()
  expect(cal.getValue()).toBe(6)
})
