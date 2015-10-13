(function() {
  'use strict';

  var Ackermann = function(m, n) {
    n = (n === undefined) ? m : n;
    this.list = [m, n];
  };

  /*
  var Pair = WILHELM.Pair.Pair;
  var Ackermann = WILHELM.Ackermann;

  var test = new Pair(null, new Pair(2));
  console.log(Ackermann.print(test));

  while (typeof test.n != 'number') {
    Ackermann.step(test);
    console.log(Ackermann.print(test));
  }
  */
})();
