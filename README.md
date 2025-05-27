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

## 2. What are the benefits of using TypeScript?

### Answer: 
- Early error detection (compile time এ error ধরতে পারে)

- Better IDE support (auto-complete, type hints)

- More readable and maintainable code

- Supports OOP concepts (like classes, interfaces)

- TypeScript ব্যবহার করলে কোড অনেক clean হয় এবং বড় প্রজেক্টে maintain করা সহজ হয়।


## 3. Explain Loops in Typescript?

### Answer:
একটি loop statement allow করে কোন একটা statement বা একাধিক statement বারবার execute করতে।
TypeScript বিভিন্ন ধরনের loop দেয় যাতে আমরা সহজে looping handle করতে পারি।

- `for` loop হচ্ছে একটা definite loop. মানে যেই loop এর iteration সংখ্যা fixed বা আগে থেকে জানা থাকে।
```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
এই loop টি ৫ বার চলবে — ০ থেকে ৪ পর্যন্ত।

- `while` loop তখন চলবে যখন condition টি true হবে।
```typescript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
এখানে, যতক্ষণ i < 5, ততক্ষণ loop চলবে।

- `do...while` loop দেখতে অনেকটা `while` loop এর মতোই।
তবে পার্থক্য হলো — এই loop প্রথমে body execute করে, তারপর condition check করে।
```typescript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
এখানে কমপক্ষে একবার loop অবশ্যই execute হবে, condition false হলেও।


## 4. What are generics in TypeScript?

### Answer:

Generics allow you to write reusable components যেখানে type later define করা যায়।
এটা dynamic type কিন্তু still type-safe থাকে।

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("Hello");
```
`<T>` হলো generic টাইপ। function টি যেকোনো টাইপ নিতে পারে, কিন্তু return এর টাইপও সেইটাই হবে।


## 5. What is "never" type in TypeScript?

### Answer: 

`never` টাইপ মানে, যেই function বা variable কখনই কোনো value return করবে না বা complete হবে না।

```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```
এই function টি কখনই naturally return করবে না — এটি exception throw করে program থামিয়ে দেবে।