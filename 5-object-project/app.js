// BOOK Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor

function UI(){
    // Add Book to list
    UI.prototype.addBookToList = function(book){
       const list = document.querySelector("#book-list");

    // Create tr element
    const row = document.createElement("tr");

    // Insert Cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>X</td>
    `;

    list.appendChild(row);
    }

    UI.prototype.clearFields = function(){
        document.querySelector("#bookname").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}


// Event Listener for add book

document.getElementById("book-form").addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("bookname").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Instantiate book
    const ui = new UI();

    const book = new Book(title,author,isbn);

    // Validation

    if(title === "" || author === "" || isbn === ""){
        //  Alert
        alert("Please fill the form");
    } else {
        ui.addBookToList(book);
        ui.clearFields();
    }
    
})