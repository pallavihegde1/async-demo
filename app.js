console.log('Before');
getUser(1, (user) => {
  console.log('User', user)
  //after get user if we want to get repos
  getRepos(1, (repos) => {
    console.log('Repos', repos)
  })
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() =>{
    console.log('Reading a user from a database...');
    callback({id: id, uname: 'mosh'});
  }, 2000)
}

function getRepos(id, callback) {
  setTimeout(() =>{
    console.log('getting repos...');
    callback(['a', 'b', 'c']);
  }, 2000)
}

// // function findFibonacci(n){
// //     let a = 0, b = 1, f = 1;
// //     for(var i = 2; i <= n; i++) {
// //         f = a + b;
// //         a = b;
// //         b = f;
// //     }
// //     console.log(f)
// // }
//
// // findFibonacci(1)
// var count = 0
// function recusriveFib(n) {
//   console.log(count++)
//   if(n ===0 || n ===1 ) return 1
//   return recusriveFib(n-1) + recusriveFib(n-2)
// }
//
// recusriveFib(4)
