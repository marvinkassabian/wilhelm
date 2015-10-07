function Pair(m, n) {
  this.m = m;
  this.n = n;
}

function step(m, n) {
  return step(new Pair(m, n));
}

function step(pair) {

}

var first = new Pair(1,2);

console.log(first);
