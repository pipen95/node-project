/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* 
/* eslint-disable no-plusplus */

const SCRIPTS = require('./scripts.js');

// const charCount = script => {
//   return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from);
//   }, 0);
// };

// console.log(
//   SCRIPTS.reduce((a, b) => {
//     return charCount(a) < charCount(b) ? b : a;
//   })
// );

function characterScript(code) {
  for (const script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupDirection) {
  const counts = [];
  for (const item of items) {
    const direction = groupDirection(item);
    const known = counts.findIndex(c => c.direction === direction);
    if (known === -1) {
      counts.push({ direction, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

// function textScripts(text) {
//   const scripts = countBy(text, char => {
//     const script = characterScript(char.codePointAt(0));
//     return script ? script.name : 'none';
//   }).filter(({ name }) => name !== 'none');

//   const total = scripts.reduce((n, { count }) => n + count, 0);
//   if (total === 0) return 'No scripts found';

//   return scripts
//     .map(({ name, count }) => {
//       return `${Math.round((count * 100) / total)}% ${name} and ${count}`;
//     })
//     .join(', ');
// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

// Exercice 1 : Flattening // OK

// const array = SCRIPTS[0].ranges;

// const arrFlat = arr => {
//   return arr.reduce((a, b) => a.concat(b), []);
// };

// // console.log(SCRIPTS[0].ranges);

// Exercice 2 : Your own loop // NO

// Exercice 3 : Everything

// const SCRIPTS = require('./scripts.js');

// const every = (arr, test) => {
//   for (const el of arr) {
//     if (test(el) === false) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(every([3, 4], n => n > 2));

// function every(array, predicate) {
//   return !array.some(element => !predicate(element));
// }

// console.log(every([2, 3, 4, 3], n => n > 10));

// Exercice 4 : Dominant writing direction

function dominantDirection(text) {
  const scripts = countBy(text, char => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ direction }) => direction !== 'none');
  return scripts.reduce((a, b) =>
    a.count > b.count ? a.direction : b.direction
  );
}

console.log(dominantDirection('Hey, مساء الخير'));
