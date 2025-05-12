// Check if a number is prime

function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// console.log(isPrime(9));


// Find the second largest number in an array

function secondLargest(arr: number[]): number | null {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique.length >= 2 ? unique[1] : null;
}

// console.log(secondLargest([12, 15, 64, 56, 23]));


// Fibonacci sequence
function fibonacci(n: number): number[] {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// console.log(fibonacci(7))