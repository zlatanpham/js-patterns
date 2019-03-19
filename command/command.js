function Command (execute, undo, executeImmediate = true) {
  if (typeof execute === 'function' && executeImmediate) {
    execute()
  }

  return {
    execute,
    undo
  }
}
function calculator () {
  var value = 0
  var commands = []
  var pointer = 0

  var add = function (num) {
    value += num
  }

  var subtract = function (num) {
    value -= num
  }

  var addCommand = function (command) {
    pointer++
    commands.splice(pointer, commands.length)
    commands.push(command)
  }

  return {
    getValue: function () {
      return value
    },
    add: function (num) {
      addCommand(
        new Command(
          function () {
            add(num)
          },
          function () {
            subtract(num)
          }
        )
      )
    },
    subtract: function (num) {
      addCommand(
        new Command(
          function () {
            subtract(num)
          },
          function () {
            add(num)
          }
        )
      )
    },
    undo: function () {
      if (pointer - 1 === 0) return
      commands[pointer - 1].undo()
      pointer--
    },
    redo: function () {
      if (pointer === commands.length) return
      commands[pointer - 1].execute()
      pointer++
    }
  }
}

module.exports = calculator
