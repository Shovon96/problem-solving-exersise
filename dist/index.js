"use strict";
// Check if a number is prime
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function isPrime(n) {
    if (n <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
// console.log(isPrime(9));
// Find the second largest number in an array
function secondLargest(arr) {
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique.length >= 2 ? unique[1] : null;
}
// console.log(secondLargest([12, 15, 64, 56, 23]));
// Fibonacci sequence
function fibonacci(n) {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
// console.log(fibonacci(7))
// serial execution of async
function runSerially(tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (const task of tasks) {
            results.push(yield task());
        }
        return results;
    });
}
const task1 = () => new Promise(res => setTimeout(() => res('A'), 1000));
const task2 = () => new Promise(res => setTimeout(() => res('B'), 500));
const task3 = () => new Promise(res => setTimeout(() => res('C'), 300));
// runSerially([task1, task2, task3]).then(console.log);
//  Use Functions, Optional, and Literal Types
function logUserInfo(name, age, role) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    if (role) {
        console.log(`Role: ${role}`);
    }
    else {
        console.log('Role: not specified');
    }
}
// Reverse String
function reverseString(input) {
    return input.split('').reverse().join('');
}
// console.log(reverseString("hello")); // Output: "olleh"
// Type Assertion and Narrowing
function handleInput(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
function describeAdmin(user) {
    return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
}
const admin = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: 2,
};
function getEmployee2City(employee2) {
    var _a;
    return (_a = employee2.address) === null || _a === void 0 ? void 0 : _a.city;
}
const emp1 = {
    name: "John Doe",
    address: {
        city: "New York"
    }
};
const emp2 = {
    name: "Jane Smith"
};
// console.log(getEmployee2City(emp1)); // Output: New York
// console.log(getEmployee2City(emp2)); // Output: undefined
// Nullish Coalescing
function getDisplayName(name) {
    return name !== null && name !== void 0 ? name : "Anonymous";
}
// console.log(getDisplayName("Alice"));   // Output: Alice
// console.log(getDisplayName(null));      // Output: Anonymous
//  Unknown Type
function processData(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    else if (typeof data === "number") {
        return data * data;
    }
    else {
        return "Unsupported data type";
    }
}
// console.log(processData(5));       // 25
// console.log(processData(true));    // "Unsupported data type"
// Never type
function handleError(message) {
    throw new Error(message);
}
// handleError("Something went wrong!"); // Throws an error and halts execution
// Generic function to remove duplicates from an array
function removeDuplicates(items) {
    return Array.from(new Set(items));
}
function removeUserDuplicates(users) {
    const seen = new Set();
    return users.filter(user => {
        if (seen.has(user.id))
            return false;
        seen.add(user.id);
        return true;
    });
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
