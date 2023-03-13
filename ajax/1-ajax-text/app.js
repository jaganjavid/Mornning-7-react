document.getElementById("button").addEventListener("click", loadData);



function loadData(){
    // Create a XHR object

    const xhr = new XMLHttpRequest();

    // Open 

    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("output").textContent = this.responseText;
        }

        if(this.status === 404){
            document.getElementById("output").textContent = "Not Found";
        }
    }
    // console.log("RS", xhr.readyState);
    // xhr.onreadystatechange = function(){
    //     console.log("RS", xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //         document.getElementById("output").textContent = this.responseText;
    //     }
    // }

    xhr.send();

    console.log(xhr);
}


// HTTP Status

// 200: OK
// 403 : "forbidden";
// 404 : Not Found
// 500 : server

// Ready state value

// 0 : request not initialized
// 1 : server connection established
// 2 : request received
// 3 : Processing request
// 4 : The operation is completed