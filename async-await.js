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

async function dispalyCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user)
    console.log(repos)
  }
  catch (err) {
    console.log('error')
  }
}

dispalyCommits()
