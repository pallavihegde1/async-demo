const p = new Promise((resolve, reject) => {
  // kick of some async work
  setTimeout(() => {
    // resolve the promise
    resolve(1);
    reject(new Error('message'))
  }, 2000)
})

// if promise was resolved
p
.then(result => console.log('result', +result))
.catch(error => console.log('Error', error.message))
