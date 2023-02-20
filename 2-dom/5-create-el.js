// Create Element

const li = document.createElement("li");

// Add Class
li.className = "collection-item";

// Add id
li.id = "test";

// Add Attribute
li.setAttribute("title", "New Item");

// Create a text node and append
li.appendChild(document.createTextNode("Hello World"));

// Create a new link element
const link = document.createElement("a");

// Add Class
link.className = "delete-item secondary-content";

// Add icon HTML

link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

document.querySelector(".collection").appendChild(li);