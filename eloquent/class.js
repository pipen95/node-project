/* eslint-disable no-restricted-syntax */
// Exercice 1 : a vector Type

// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   plus(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
//   }

//   minus(other) {
//     return new Vec(this.x - other.x, this.y - other.y);
//   }

//   get length() {
//     return Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
//   }
// }

// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// // console.log(new Vec(3, 4).length);
// console.log(Object.getPrototypeOf(Vec));

// class GroupIterator {
//   constructor(group) {
//     this.group = group;
//   }

//   next() {
//     console.log(this.group);
//   }
// }

// class Group {
//   // Your code here.
//   constructor() {
//     this.members = [];
//   }

//   add(val) {
//     if (!this.has(val)) {
//       return this.members.push(val);
//     }
//     console.log(`The value is already in the array`);
//   }

//   delete(value) {
//     this.members = this.members.filter(v => v !== value);
//   }

//   has(value) {
//     return this.members.includes(value);
//   }

//   static from(collection) {
//     const group = new Group();
//     for (const value of collection) {
//       group.add(value);
//     }
//     return group;
//   }

//   [Symbol.iterator]() {
//     return new GroupIterator(this);
//   }
// }

// for (const value of Group.from(['a', 'b', 'c'])) {
//   console.log(value);
// }

// const group = Group.from([10, 20]);
// group.delete(10);
// console.log(group.has(10));
// console.log(group);
// group.add(15);
// const reverse = arr => ({
//   [Symbol.iterator]() {
//     let i = arr.length;
//     return {
//       next: () => ({
//         value: arr[--i],
//         done: i < 0
//       })
//     };
//   }
// });

// const nums = [1, 2, 3, 4, 5];

// for (const value of reverse(nums)) {
//   console.log(value);
// }

// console.log(nums); // [1, 2, 3, 4, 5]
// console.log([...reverse(nums)]); // [5, 4, 3, 2, 1]

// Exercie 4: Borrowing a method

// const map = { one: true, two: true, hasOwnProperty: true };

// // Fix this call
// console.log(map.call(this.one, hasOwnProperty));

