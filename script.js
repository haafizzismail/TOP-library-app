let myLibrary = ["Atomic Habits", "Dogman", "The Stand"];

const bookSection = document.querySelector('.book-cards');

function Book() {
    this.title = title;
}

// function addBookToLibrary() {
//     let newBook = prompt("Title of book?");
//     myLibrary.push(newBook);
// }

function displayBooks() {
    myLibrary.forEach(book => console.log(book));
}