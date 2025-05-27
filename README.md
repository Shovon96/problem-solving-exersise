# I have write some Typescript Interview questions?

## 1. What is TypeScript and what is the differance between TypeScript and Javacript?

### Answer:
TypeScript is a superset of JavaScript. It is an object-oriented and tightly typed programming language. TypeScript code is transformed to JavaScript, which may be used in any environment that supports JavaScript, including browsers, Node.js, and your own applications.

TypeScript হচ্ছে একটি superset of JavaScript, যা static type feature add করে।
JavaScript এ variable এর type define করতে হয় না, কিন্তু TypeScript এ আমরা টাইপ define করতে পারি, যেটা compile time এ error ধরতে সাহায্য করে।

```typescript
let name: string = "Rakib"; // TypeScript
let age = 25; // Type is inferred as number
```