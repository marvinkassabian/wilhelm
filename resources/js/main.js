(function() {
  "use strict";

  var Ackermann = WILHELM.Ackermann.Ackermann;

  var a = Object.create(Ackermann);
  a.init(3);

  var func = function() {
    UTIL.println(a.toString({
      verbose: true
    }));
    if (a.step()) {
      setTimeout(func, 10);
    }
  };

  func();
})();
