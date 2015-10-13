(function() {
  'use strict';

  var Ackermann = function(m, n) {
    n = (n === undefined) ? m : n;
    this.list = [m, n];
  };

  Ackermann.prototype.step = function() {
    var m;
    var n;
    if (this.list.length > 1) {
      m = this.list[this.list.length - 2];
      n = this.list[this.list.length - 1];

      this.list.pop();
      this.list.pop();

      if (m === 0) {
        this.list.push(n + 1);
      } else if (m > 0 && n === 0) {
        this.list.push(m - 1);
        this.list.push(1);
      } else if (m > 0 && n > 0) {
        this.list.push(m - 1);
        this.list.push(m);
        this.list.push(n - 1);
      }

      return true;
    } else {
      return false;
    }
  };

  Ackermann.prototype.toString = function() {
    return WILHELM.toString(this.list);
  };

  WILHELM.toString = function(list) {

    var verbose = false;

    var COMMA = verbose ? ', ' : ',';
    var OPEN = verbose ? 'A(' : 'A';
    var CLOSE = verbose ? ')' : '';

    if (list.length === 1) {
      return _.first(list);
    } else {
      return OPEN + _.first(list) + COMMA + WILHELM.toString(_.tail(list)) + CLOSE;
    }
  };

  var a = new Ackermann(3);
  var stepNotDone = true;
  /*
  do {
    console.log(a.toString());
    stepNotDone = a.step();
  } while (stepNotDone);
  */

  var func = function() {
    console.log(a.toString());
    stepNotDone = a.step();
    if (stepNotDone) {
      setTimeout(func, 5);
    }
  };

  func();

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
