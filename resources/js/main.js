(function() {
  'use strict';

  var Ackermann = WILHELM.Ackermann.Ackermann;

  var a = new Ackermann(3);

  a.toString({verbose: false, milo: true, hackney: 1.0});
  /*var func = function() {
    console.log(a.toString());
    if (a.step()) {
      setTimeout(func, 10);
    }
  };

  func();*/
})();
