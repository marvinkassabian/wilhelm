(function() {
  'use strict';

  WILHELM.namespace('WILHELM.Pair');

  WILHELM.Pair = (function(module) {

    function Pair(m, n) {
      this.m = m;
      this.n = (n === undefined) ? m : n;
    }

    module.Pair = Pair;

    return module;
  })(WILHELM.Pair);
})();
