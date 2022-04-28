let myLibrary = [];

const bookSection = document.querySelector('.book-section');
const newBookBtn = document.querySelector('.newBook');
const removeBtn = document.querySelectorAll('.remove');

newBookBtn.addEventListener('click', addBookToLibrary);

removeBtn.forEach(btn => {
    btn.addEventListener('click', e => console.log(e));
});

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary() {
    let newTitle = prompt("Title of book?");
    let newAuthor = prompt("Author of book?");
    let newRead = prompt("Read the book? (y/n)");
    const book1 = new Book(newTitle, newAuthor, newRead);
    myLibrary.push(book1);
    addNewCard(newTitle, newAuthor, newRead);
}

function addNewCard(title, author, read) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book-cards');

    const newTitle = document.createElement('span');
    const newAuthor = document.createElement('span');
    const newTitleText = document.createTextNode(title);
    const newAuthorText = document.createTextNode(author);
    newTitle.appendChild(newTitleText);
    newAuthor.appendChild(newAuthorText);

    const readButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const readText = document.createTextNode('Read');
    const removeText = document.createTextNode('Remove');
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', removeCard);

    readButton.appendChild(readText);
    removeButton.appendChild(removeText);
    bookSection.appendChild(newDiv);

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(readButton);
    newDiv.appendChild(removeButton);
}

function removeCard() {
    const card = document.querySelector('.book-cards');
    card.remove();
}