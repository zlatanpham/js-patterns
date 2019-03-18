var calculator = require('./command')

test('run without trouble', () => {
  var cal = calculator()

  cal.add(2)
  cal.add(2)
  cal.undo()
  cal.undo()
  cal.redo()
  cal.redo()

  expect(cal.getValue()).toBe(4)
})
