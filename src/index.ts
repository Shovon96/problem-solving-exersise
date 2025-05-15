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


// Reverse String
function reverseString(input: string): string {
  return input.split('').reverse().join('');
}

// console.log(reverseString("hello")); // Output: "olleh"


// Type Assertion and Narrowing
function handleInput(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * value;
  }
}

// Example usage
// console.log(handleInput("hello")); // Output: 5
// console.log(handleInput(4));       // Output: 16



// Intersection Types
type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: number;
};
type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}

const admin: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  adminLevel: 2,
};

// console.log(describeAdmin(admin));


// Optional Chaining
type Employee2 = {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
};

function getEmployee2City(employee2: Employee2): string | undefined {
  return employee2.address?.city;
}

const emp1: Employee2 = {
  name: "John Doe",
  address: {
    city: "New York"
  }
};

const emp2: Employee2 = {
  name: "Jane Smith"
};

// console.log(getEmployee2City(emp1)); // Output: New York
// console.log(getEmployee2City(emp2)); // Output: undefined



// Nullish Coalescing
function getDisplayName(name: string | null | undefined): string {
  return name ?? "Anonymous";
}

// console.log(getDisplayName("Alice"));   // Output: Alice
// console.log(getDisplayName(null));      // Output: Anonymous


//  Unknown Type
function processData(data: unknown): unknown {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return "Unsupported data type";
  }
}

// console.log(processData(5));       // 25
// console.log(processData(true));    // "Unsupported data type"



// Never type
function handleError(message: string): never {
  throw new Error(message);
}

// handleError("Something went wrong!"); // Throws an error and halts execution




// Generic function to remove duplicates from an array
function removeDuplicates<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

interface User2 {
  id: number;
  name: string;
}

function removeUserDuplicates(users: User2[]): User2[] {
  const seen = new Set<number>();
  return users.filter(user => {
    if (seen.has(user.id)) return false;
    seen.add(user.id);
    return true;
  });
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
