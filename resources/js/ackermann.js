(function() {
  "use strict";

  WILHELM.namespace("WILHELM.Ackermann");

  WILHELM.Ackermann = (function(module) {

    var Ackermann = {
      init: function(m, n) {
        n = (n === undefined) ? m : n;
        this.list = [m, n];
      },

      step: function() {
        var m;
        var n;

        if (this.list.length > 1) {
          n = this.list.pop();
          m = this.list.pop();

          if (m === 0) {
            this.list.push(n + 1);
          } else if (n === 0) {
            this.list.push(m - 1, 1);
          } else {
            this.list.push(m - 1, m, n - 1);
          }

          return true;
        } else {
          return false;
        }
      },

      toString: function(options) {
        options = UTIL.extend(options, {
          verbose: true
        });

        var OPEN = options.verbose ? "A(" : "A";
        var COMMA = options.verbose ? ", " : ",";
        var CLOSE = options.verbose ? ")" : "";

        var recToString = function(list) {

          if (list.length === 1) {
            return list[0];
          } else {
            return OPEN + list[0] + COMMA +
                recToString(list.slice(1), options) +
                CLOSE;
          }
        };

        return recToString(this.list);
      }
    };

    module.Ackermann = Ackermann;

    return module;
  })(WILHELM.Ackermann);
})();
