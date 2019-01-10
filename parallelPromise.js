const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('async operation 1..')
    resolve(1)
  }, 2000)
})

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log('async operation 2..')
    resolve(2)
  }, 2000)
})

// promise class that takes array of promises that return new promise
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message))

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message))
