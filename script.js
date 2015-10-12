function Pair(m, n) {
  this.m = m;
  this.n = n;
}

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

function printAckermann(pair) {

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

function step(pair) {

  var temp = pair;
  var prev;
  while (typeof temp.n != 'number') {
    prev = temp;
    temp = temp.n;
  }

  prev.n = ackermann(temp);
}

var test = new Pair(null, new Pair(3, 3));
console.log(printAckermann(test));

while (typeof test.n != 'number') {
  step(test);
  console.log(printAckermann(test));
}
