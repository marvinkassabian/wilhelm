(function() {
  'use strict';

  var Ackermann = WILHELM.Ackermann.Ackermann;

  var a = new Ackermann(3);
  var stepNotDone = true;

  var func = function() {
    console.log(a.toString({verbose: false}));
    stepNotDone = a.step();
    if (stepNotDone) {
      setTimeout(func, 10);
    }
  };

  func();
})();
