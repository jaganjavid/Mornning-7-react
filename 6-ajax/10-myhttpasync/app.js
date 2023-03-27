const http = new MyHttp();

const data = {
    name: "Mohamed Javid",
    username: "jaganjavid",
    email: "jj@gmail.com"
}

// Get User

http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));

// Create a user
http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Update a user
http.put("https://jsonplaceholder.typicode.com/users/2", data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Delete a user
http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(data => console.log(data))
.catch(err => console.log(err));