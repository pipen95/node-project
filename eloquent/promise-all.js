// Test code.

function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    soon(() => resolve(promises));
  });
}

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, 'enemies').then(value => console.log('Got', value));

Promise_all([]).then(array => {
  console.log('This should be []:', array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log('This should be [1, 2, 3]:', array);
});
Promise_all([soon(1), Promise.reject('X'), soon(3)])
  .then(array => {
    console.log('We should not get here');
  })
  .catch(error => {
    if (error != 'X') {
      console.log('Unexpected failure:', error);
    }
  });
