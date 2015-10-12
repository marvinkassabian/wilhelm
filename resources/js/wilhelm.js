(function(global) {
  'use strict';

  var WILHELM = (function() {

    function namespace() {
      var a = arguments;
      var o = null;
      var i;
      var j;
      var d;

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
