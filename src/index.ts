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


// serial execution of async
async function runSerially(tasks: (() => Promise<any>)[]): Promise<any[]> {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
}

const task1 = () => new Promise(res => setTimeout(() => res('A'), 1000));
const task2 = () => new Promise(res => setTimeout(() => res('B'), 500));
const task3 = () => new Promise(res => setTimeout(() => res('C'), 300));
// runSerially([task1, task2, task3]).then(console.log);


//  Use Functions, Optional, and Literal Types
function logUserInfo(
  name: string,
  age: number,
  role?: 'admin' | 'user' | 'guest'
): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  
  if (role) {
    console.log(`Role: ${role}`);
  } else {
    console.log('Role: not specified');
  }
}

// logUserInfo('Alice', 30, 'admin');
// logUserInfo('Bob', 25);  // role is optional



// Union & Intersection Type
type Student = {
  name: string;
  course: string;
  grade: number;
};

type Employee = {
  name: string;
  company: string;
  salary: number;
};

// Intersection type: has all properties from both
type WorkingStudent = Student & Employee;

// Union type: can be either Student or Employee
type PersonType = Student | Employee;
