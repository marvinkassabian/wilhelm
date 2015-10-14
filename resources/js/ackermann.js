(function() {
  'use strict';

  WILHELM.namespace('WILHELM.Ackermann');

  WILHELM.Ackermann = (function(module) {

    var Ackermann = function(m, n) {
      n = (n === undefined) ? m : n;
      this.list = [m, n];
    };

    Ackermann.prototype.step = function() {
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
    };

    Ackermann.prototype.toString = function(options) {
      return recToString(this.list, options);

      function recToString(list, options) {

        options = _.defaults(options || {}, {
          verbose: true
        });

        var COMMA = options.verbose ? ', ' : ',';
        var OPEN = options.verbose ? 'A(' : 'A';
        var CLOSE = options.verbose ? ')' : '';

        if (list.length === 1) {
          return _.first(list);
        } else {
          return OPEN + _.first(list) + COMMA +
              recToString(_.tail(list), options) +
              CLOSE;
        }
      }
    };

    module.Ackermann = Ackermann;

    return module;
  })(WILHELM.Ackermann);
})();
