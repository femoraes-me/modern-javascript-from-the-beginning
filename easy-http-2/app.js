const http = new EasyHTTP;

// Get Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// User DATA
const data = {
    name: 'Felipe Moraes',
    username: 'femoraes',
    email: 'femoraes@gmail.com'
}

// CREATE POST
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// UPDATE POST
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// DELETE USER
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));