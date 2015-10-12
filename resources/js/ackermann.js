(function() {
  'use strict';

  WILHELM.namespace('WILHELM.Ackermann');

  WILHELM.Ackermann = (function(module) {

    function ackermann(pair) {

      while (typeof pair.n != 'number') {
        pair = pair.n;
      }

      var m = pair.m;
      var n = pair.n;

      if (m === 0) {
        return n + 1;
      } else if (m > 0 && n === 0) {
        return new Pair(m - 1, 1);
      } else if (m > 0 && n > 0) {
        return new Pair(m - 1, new Pair(m, n - 1));
      }
    }

    function step(pair) {

      var temp = pair;
      var prev;
      while (typeof temp.n != 'number') {
        prev = temp;
        temp = temp.n;
      }

      prev.n = ackermann(temp);
    }

    function print(pair) {

      var verbose = false;

      var COMMA = verbose ? ', ' : ',';
      var OPEN = verbose ? 'A(' : 'A';
      var CLOSE = verbose ? ')' : '';

      var prefix = '';
      var postfix = '';
      var infix;

      while (typeof pair.n != 'number') {
        if (pair.m !== null) {
          prefix += (OPEN + pair.m + COMMA);
          postfix += CLOSE;
        }

        pair = pair.n;
      }

      if (pair.m !== null) {
        infix = OPEN + pair.m + COMMA + pair.n + CLOSE;
      } else {
        infix = pair.n;
      }

      return prefix + infix + postfix;
    }

    module.ackermann = ackermann;
    module.step = step;
    module.print = print;

    return module;
  })(WILHELM.Ackermann);
})();
