//primitivies

let age: number = 12;
let userName: string;
userName = "Theo";
let isPrime: boolean;
isPrime = true;
let trash: null;

////////////////////////////////////////
// functions

function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);
console.log(result);

////////////////////////////////////////
// Arrays
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Reading"];

////////////////////////////////////////
// Object
let person: any;

person = {
  name: "Theo",
  age: 12,
};

let man: {
  name: string;
  age: number;
};

////////////////////////////////////////
// Array of Objects

let people: {
  name: string;
  age: number;
}[];

////////////////////////////////////////
// Type Inference
let stack = "React Frontend Framework";

////////////////////////////////////////
// Union Type
let course: string | number | boolean = 12;

////////////////////////////////////////
// Type Alias
type details = {
  name: string;
  age: number;
};

let student: details;

let students: details[];

////////////////////////////////////////
// Functions and Types
function adds(c: number, d: number): string | number {
  return c + d;
}

////////////////////////////////////////
// void return type of a function

function prints(value: any) {
  console.log(value);
}

////////////////////////////////////////
// Generics
function insertAtBeginning<T> (array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);

// updated[0].split('');


