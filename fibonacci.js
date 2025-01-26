let calculations = 0;
function fibonacciRecursive(n) {
  calculations++;
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(30));
console.log(calculations);

function fibDynamic() {
  let cache = {};
  return function fib(n) {
    //calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibDynamic();
// console.log(fasterFib(30), "2");
// console.log(calculations, "2");
