// /////////////////////////////
// Exercice 1 : RETRY
///////////////////////////////

// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   }
//   throw new MultiplicatorUnitFailure('Klunk');
// }

// function reliableMultiply(a, b) {
//   // for (let i = 0; ; i++) {
//   for (;;) {
//     // for (;;) is an infinite loop
//     try {
//       const prim = primitiveMultiply(a, b);
//       return prim;
//     } catch (e) {
//       if (!(e instanceof MultiplicatorUnitFailure)) {
//         console.log('Not a valid.');
//         throw e;
//       }
//     }
//   }
// }
// console.log(reliableMultiply(8, 8));
// // → 64

// /////////////////////////////
// Exercice 2 : UNLOCK BOX
///////////////////////////////

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
};

function withBoxUnlocked(body) {
  const { locked } = box;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push('gold piece');
});

// try {
//   withBoxUnlocked(function() {
//     throw new Error('Pirates on the horizon! Abort!');
//   });
// } catch (e) {
//   console.log('Error raised:', e);
// }

console.log(box.locked);
// → true
