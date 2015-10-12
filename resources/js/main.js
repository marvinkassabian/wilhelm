(function() {
  'use strict';

  var Pair = WILHELM.Pair.Pair;
  var Ackermann = WILHELM.Ackermann;

  var test = new Pair(null, new Pair(3, 3));
  console.log(Ackermann.print(test));

  while (typeof test.n != 'number') {
    Ackermann.step(test);
    console.log(Ackermann.print(test));
  }
})();
