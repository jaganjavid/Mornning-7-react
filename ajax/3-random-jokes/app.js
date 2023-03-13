document.getElementById("getJokes").addEventListener("click", loadJokes)

function loadJokes(){
    // Create a XHR object

    const xhr = new XMLHttpRequest();

    // Open 

    xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

    xhr.onload = function(){
        if(this.status === 200){
            const joke = JSON.parse(this.responseText);

            document.querySelector(".joke").innerHTML = joke.value;
        }

        if(this.status === 404){
            document.getElementById("output").textContent = "Not Found";
        }
    }
    xhr.send();
}