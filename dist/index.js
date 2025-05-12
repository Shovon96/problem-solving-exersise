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
