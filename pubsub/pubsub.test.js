var events  = require('./pubsub')

test('test pubsub event', () => {
  var count = 0;
  events.subscribe('plus', function(number){
    count += number;
  })

  events.subscribe('minus', function(number){
    count -=  number;
  })

  events.publish('plus', 5);
  events.publish('minus', 2);

  expect(count).toBe(3);
})
