

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText(){
    fetch("text.txt").then(function(res) {
        return res.text();
    })
    .then(function(data){
        document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    })
}

function getJson(){
    fetch("users.json").then(function(res) {
        return res.json();
    })
    .then(function(data){
        let output = "";
        data.forEach(function(user){
            output += `<li>${user.name}</li>`
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    })
}


function getExternal(){
    fetch("https://api.chucknorris.io/jokes/random").then(function(res) {
        return res.json();
    })
    .then(function(data){
        document.getElementById("output").innerHTML = data.value;
    })
    .catch(function(err){
        console.log(err);
    })
}
