var events = (function() {
  var topics = [];
  var hOP = topics.hasOwnProperty;

  return {
    subscribe: function(topic, listener) {
      if (!hOP.call(topics, topic)) topics[topic] = [];
      var index = topics[topic].push(listener) - 1;

      return function() {
        delete topics[topic][index];
      };
    },
    publish: function(topic, info) {
      if (!hOP.call(topics, topic)) return;

      topics[topic].forEach(function(item) {
        item(info || {});
      });
    },
  };
})();

module.exports = events;
