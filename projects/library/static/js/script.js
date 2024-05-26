var myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById('author').value;
    const read = document.getElementById('status').checked;

    if (title=="" || author == ""){
        alert("Invalid entry");
    } else if (myLibrary.some(u=>u.title === title)) {
        alert("This book already exists.");
    } else {
        let newBook = new Book(title, author, read);
        myLibrary.push(newBook);
        updateDisplay(newBook);
    }
}

function displayBooks(){
    for (let book of myLibrary){
        updateDisplay(book);
    }
}

function deleteBook(e) {
    let buttonClicked = e.target;
    let bookRow = buttonClicked.parentNode.parentNode;
    let bookName = bookRow.cells[0].innerText;
    bookName = bookName.toLowerCase();
    
    if (myLibrary.length === 0 || myLibrary === null) {
        console.log('Library empty');
        return;
      }
    for (let books of myLibrary) {
        if (books.title.toLowerCase() == bookName) {
            let idx = myLibrary.indexOf(books);
            bookRow.remove();
            myLibrary.splice(idx, idx + 1);
        }

}}

function updateDisplay(book) {
    let table = document.getElementById("library-table-body");
    let newRow = document.createElement('tr');
        
    const title = document.createElement('td');
    const author = document.createElement('td');
    const readStatus = document.createElement('td');
    const rmBtn = document.createElement('td');
    
    const readBtn = document.createElement('button');
    const deleteButton = document.createElement("button");
    
    readStatus.appendChild(readBtn);
    rmBtn.appendChild(deleteButton);

    title.textContent = book.title;
    author.textContent = book.author;
    readBtn.textContent = (book.read === true) ? 'Read' : 'Unread';
    readBtn.classList.add("read-button");
    readBtn.id = (book.read === true) ? 'btn-read' : 'btn-unread';
    readBtn.addEventListener("click", changeReadStatus);

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", deleteBook);
    
    newRow.appendChild(title);
    newRow.appendChild(author);
    newRow.appendChild(readStatus);
    newRow.appendChild(rmBtn);
    table.appendChild(newRow);

}

function changeReadStatus(e) {
    const btn = e.target;
    const status = btn.textContent;
    switch (status) {
        case "Read":
            btn.textContent = "Unread";
            btn.id = 'btn-unread';
            break;
        case "Unread":
            btn.textContent = "Read";
            btn.id = 'btn-read';
            break;
    }
}
