const http = new EasyHttp;

const data = {
    name: "Jagan Javid",
    userName : "JaganJavid",
    email: "JJ@gmail.com"
}
// Get Users

http.get("https://jsonplaceholder.typicode.com/users/1")
    .then(data => console.log(data))
    .catch(err => console.log(err));


http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(data => console.log(data))
    .catch(err => console.log(err));