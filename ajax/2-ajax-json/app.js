document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(){
    // Create a XHR object

    const xhr = new XMLHttpRequest();

    // Open 

    xhr.open("GET", "customer.json", true);

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);

            const output = `
             <ul class="list-group">
               <li class="list-group-item" >ID: ${customer.id}</li>
               <li class="list-group-item" >Name: ${customer.name}</li>
               <li class="list-group-item" >Company: ${customer.company}</li>
               <li class="list-group-item" >Phone: ${customer.phone}</li>
             </ul>
            `;

            document.getElementById("customer").innerHTML = output;
        }

        if(this.status === 404){
            document.getElementById("output").textContent = "Not Found";
        }
    }
    xhr.send();
}


function loadCustomers(){
    // Create a XHR object

    const xhr = new XMLHttpRequest();

    // Open 

    xhr.open("GET", "customers.json", true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            
            let output = "";

            customers.forEach((function(customer){
                output += `
                    <ul class="list-group">
                        <li class="list-group-item" >ID: ${customer.id}</li>
                        <li class="list-group-item" >Name: ${customer.name}</li>
                        <li class="list-group-item" >Company: ${customer.company}</li>
                        <li class="list-group-item" >Phone: ${customer.phone}</li>
                    </ul>
                `
            }))

            document.getElementById("customers").innerHTML = output; 
        }

        if(this.status === 404){
            document.getElementById("output").textContent = "Not Found";
        }
    }
    xhr.send();
}