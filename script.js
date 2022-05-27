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

// Display Books Added
function displayBooks(book) {
    myLibrary.forEach((book) => addBookToList(book));
}

function addBookToList(book) {
    const container = document.querySelector('.book-section');const card = document.createElement('div');
        card.classList.add('book-cards');

        card.innerHTML = `
            <span>${book.title}</span>
            <span>${book.author}</span>
            <span>Read? ${book.read}</span>
            <button>Read</button>
            <button class="remove">Remove</button>
        `;

        container.appendChild(card);
}

// Clear form fields
function clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('input[name="read"]').checked = false;
}

// Close Modal
function closeModal() {
    document.querySelector('.modal-bg').classList.remove('modal-bg-active');
}

// Display Books on Load
document.addEventListener('DOMContentLoaded', displayBooks);

// Display Modal on New Book Button Click
const newBookBtn = document.querySelector('.newBook');
const modalBg = document.querySelector('.modal-bg');

newBookBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-bg-active');
});

// Close Modal by X icon
const modalClose = document.querySelector('.modal-close');
    
modalClose.addEventListener('click', function() {
    closeModal();
});

// Add Book
const form = document.querySelector('.modal');

form.addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    
    // Instantiate a Book
    const book = new Book(title, author, read);

    // Add book to myLibrary Array
    myLibrary.push(book);

    // Add book to UI
    addBookToList(book);

    // clear form Fields
    clearFields();

    // close Modal
    closeModal();
});