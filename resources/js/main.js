(function() {
  'use strict';

  var Ackermann = WILHELM.Ackermann.Ackermann;

  var a = Object.create(Ackermann);
  a.init(3);

  var func = function() {
    console.log(a.toString({
      verbose: false
    }));
    if (a.step()) {
      setTimeout(func, 10);
    }
  };

  func();
})();
