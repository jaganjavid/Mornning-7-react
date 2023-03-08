// BOOK Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// Store Constructor

function Store(){
    Store.prototype.getBooks = function(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    Store.prototype.displayBooks = function(){
        const store = new Store();
        const books = store.getBooks();
        books.forEach(function(book){
            const list = document.querySelector("#book-list");

            // Create tr element
            const row = document.createElement("tr");
      
             // Insert Cols
             row.innerHTML = `
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td class="delete">X</td>
              `;
      
             list.appendChild(row);
        })
    }

    Store.prototype.addBooks = function(book){
        const store = new Store();
        const books = store.getBooks(); // array        
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    Store.prototype.removeBooks = function(isbn){
        const store = new Store();
        const books = store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
               books.splice(index, 1);
            }
        })

        localStorage.setItem("books", JSON.stringify(books));
    }
}



const store = new Store();


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
        <td class="delete">X</td>
        `;

       list.appendChild(row);

       store.addBooks(book);
    }

    UI.prototype.clearFields = function(){
        document.querySelector("#bookname").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    UI.prototype.showAlert = function(message,className){
    //   Create Div
    
    const div = document.createElement("div");
    // Add Class to div
    div.className = `alert ${className}`;

    // Add Text 
    div.appendChild(document.createTextNode(message));

    // Get Container
    const container = document.querySelector(".container");

    // Get form
    const form = document.querySelector("#book-form");

    // Insert Alert 
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 3000)

    }
    
    UI.prototype.deleteBook = function(target){
        if(target.className === "delete"){
            target.parentElement.remove();
            const isbn = target.previousElementSibling.textContent;
            store.removeBooks(isbn);
        }
    }
}


// DOM LOAD EVENT

document.addEventListener("DOMContentLoaded", store.displayBooks);


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
        ui.showAlert("Please Fill the form", "error")
    } else {
        ui.addBookToList(book);
        ui.showAlert("Book Added", "success");
        ui.clearFields();
    }
    
})

// Event listener for delete

document.getElementById("book-list").addEventListener("click", function(e){
    e.preventDefault();

    if(e.target.className === "delete"){
        // Instantiate book
        const ui = new UI();

        ui.deleteBook(e.target);

        ui.showAlert("Book Deleted", "success")
    }
})

