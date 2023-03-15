const http = new myHttp();

http.get("https://jsonplaceholder.typicode.com/users", function(response){
    console.log(response);
});

