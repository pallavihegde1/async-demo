// console.log('Before');
// getUser(1, (user) => {
//   console.log('User', user)
//   //after get user if we want to get repos
//   getRepos(1, (repos) => {
//     console.log('Repos', repos)
//   })
// });
// console.log('After');

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
