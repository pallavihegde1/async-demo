console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayUser(user) {
  console.log('User', user)
  //after get user if we want to get repos
  getRepos(1, displayRepos)
}

function displayRepos(repos) {
  console.log('Repos', repos)
}

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
