// Execercice 1 : Regex Golf

// function verify(regexp, yes, no) {
//   let result;
//   // Ignore unfinished exercises
//   if (regexp.source === '...') return;
//   for (const str of yes)
//     if (!regexp.test(str)) {
//       console.log(`Failure to match '${str}'`);
//     } else {
//       result = regexp.test(str);
//       console.log(result);
//     }

//   for (const str of no)
//     if (regexp.test(str)) {
//       console.log(`Unexpected match for '${str}'`);
//     } else {
//       result = regexp.test(str);
//       console.log(result);
//     }
// }

// verify(/car|cat/, ['my cat', 'bad cats'], ['camper', 'high art']);

// verify(/prop|pop/, ['pop culture', 'mad props'], ['plop', 'prrrop']);

// verify(
//   /ferret|ferry|ferrari/,
//   ['ferret', 'ferry', 'ferrari'],
//   ['ferrum', 'transfer A']
// );

// verify(
//   /\b(\w*ious)\b/,
//   ['how delicious', 'spacious room'],
//   ['ruinous', 'consciousness']
// );

// verify(/(\s*\.|,|:|;)/, ['bad punctuation .'], ['escape the period']);

// verify(/\w{7}/, ['hottentottententen'], ['no', 'hotten totten tenten']);

// verify(
//   /\b[^\We]+\b/i,
//   ['red platypus', 'wobbling nest'],
//   ['earth bed', 'learning ape', 'BEET']
// );

// Exercice 2: String

// const text = "'I'm the cook,' he said, 'it's my job.'";
// // Change this call.
// console.log(text.replace(/^\W'$|^\W'$/g, '"'));
// // ^\[(.*)\]$

// function findLongestWordLength(str) {
//   const wordArr = str.split(' ');
//   console.log(wordArr);
//   let longword = wordArr.reduce((a, b) => (a.length > b.length ? a : b));

//   console.log(longword.length);
//   return longword.length;
// }

// findLongestWordLength('The quick brown fox jumped over the lazy dog');

// function largestOfFour(arr) {
//   const largest = [];
//   for (let i = 0; i < arr.length; i++) {
//     largest.push(arr[i].reduce((a, b) => (a > b ? a : b)));
//   }
//   return largest;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1]
// ]);
function confirmEnding(str, target) {
  const stri = [...str];
  const rev = stri.reverse();
  const targ = [...target];
  const rev2 = targ.reverse();
  let value = [];
  for (let i = 0; i < rev2.length; i++) {
    if (rev2[i] !== rev[i]) {
      value.push(false);
    } else {
      value.push(true);
    }
  }
  const truth = value.includes(false);
  return truth === true ? false : true;
}

console.log(confirmEnding('Abstraction', 'action'));
