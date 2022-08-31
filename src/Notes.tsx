import React from 'react';

let name: string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // This is a tuple that can contain a number and a string inside it.

// Type vs interface
type CatOwner = {
  name: string;
  age?: number; // ? means optional.
};

type Cat = CatOwner & {
  // You can add CatOwner types into Cat types,
  catName: string;
  catYears: number;
};

let cat: Cat = {
  name: 'Marcus',
  catName: 'Whiskers',
  catYears: 9,
};

let person: CatOwner = {
  name: 'Marcus',
};

// Interface is easier to extend.
interface DogOwner {
  name: string;
  isOwner: boolean;
}

interface Dog {
  dogName: string;
  age: number;
  owner: DogOwner;
}

let ownerInfo: DogOwner = {
  name: 'Marcus',
  isOwner: true,
};

let yourDawg: Dog = {
  dogName: 'Larry',
  age: 4,
  owner: ownerInfo,
};

console.log(yourDawg);

// let lotsOfPeople: Person[];

// Union type
let age: number | string; // Can be either number or string.

age = 'Five';
age = 5;

let personName: unknown;

// Defining a function. Return type is void.
let printName: (name: string) => void;
