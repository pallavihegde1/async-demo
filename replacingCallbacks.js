getUser(1)
.then(user => {
  console.log('User', user)
  return getRepos(user)
})
.then(repos => console.log(repos))
.catch(err => console.log('Error', err.message))

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve({id: id, uname: 'mosh'});
    }, 2000)
  })
}

function getRepos(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(['a', 'b', 'c']);
    }, 2000)
  })
}
