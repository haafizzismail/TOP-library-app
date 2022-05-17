// storing books in this array
const myLibrary = [
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        read: 'no'
    },
    {
        title: 'Cross Country',
        author: 'James Patterson',
        read: 'no'
    },
    {
        title: 'Emergency Deep',
        author: 'Michael DiMercurio',
        read: 'yes'
    }
];

// Book constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

// Add Book to myLibrary array
function addBookToLibrary() {
    let newTitle = prompt("Title of book?");
    let newAuthor = prompt("Author of book?");
    let newRead = prompt("Read the book? (y/n)");
    const book1 = new Book(newTitle, newAuthor, newRead);
    myLibrary.push(book1);
}

// Display Books Added
function displayBooks(book) {
    const container = document.querySelector('.book-section');
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('book-cards');

        card.innerHTML = `
            <span>${book.title}</span>
            <span>${book.author}</span>
            <span>Read? ${book.read}</span>
            <button>Read</button>
            <button class="remove">Remove</button>
        `;

        container.appendChild(card);
    });
}

// Display Books on Load
document.addEventListener('DOMContentLoaded', displayBooks);