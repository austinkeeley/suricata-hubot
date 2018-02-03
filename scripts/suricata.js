Tail = require('tail').Tail;

module.exports = function(robot) {

  // Tail the output of fast.log and
  var tail = null;

  robot.hear('start', function(res) {
    if (!tail) {
      tail = new Tail('/var/log/suricata/fast.log');
      res.send('Starting tail of file');
      tail.on('line', function(data) {
        res.send(data);
      });
    }
  });

  robot.hear('stop', function(res) {
    if (tail) {
      res.send('Stopping...');
      tail.unwatch();
      tail = null;
    }
    else {
      res.send('I\'m not listening');
    }
  });

  robot.hear('status', function(res) {
    if (!tail) {
      res.send('Not running');
    }
    else {
      res.send('I\'m working');
    }
  });


};
