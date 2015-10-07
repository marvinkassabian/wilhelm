(function(global) {
  "use strict";

  var WILHELM = (function() {

    function namespace() {
      var a = arguments;
      var o = null;
      var i, j, d;

      for (i = 0; i < a.length; i = i + 1) {
        d = a[i].split('.');
        o = WILHELM;

        for (j = ((d[0] === 'WILHELM') ? 1 : 0); j < d.length; j++) {
          o[d[j]] = o[d[j]] || {};
          o = o[d[j]];
        }
      }

      return o;
    }

    this.namespace = namespace;

    return this;
  }).call(WILHELM || {});

  global.WILHELM = WILHELM;
})(this);

(function() {
  "use strict";

  WILHELM.namespace('WILHELM.Pair');

  WILHELM.Pair = (function(module) {

    function Pair(m, n) {
      this.m = m;
      this.n = n;
    }

    function step(m, n) {
      return step(new Pair(m, n));
    }

    function step(pair) {
      
    }

    return module;
  })(WILHELM.Pair);
})();
