// storing books in this array
const myLibrary = [
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        read: false
    },
    {
        title: 'Cross Country',
        author: 'James Patterson',
        read: false
    },
    {
        title: 'Emergency Deep',
        author: 'Michael DiMercurio',
        read: true
    }
];

// Book constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

//Book toggle prototype
Book.prototype.toggle = function(book) {
    if (this.read === false) {
        this.read = true;
    } else if (this.read === true) {
        this.read = false;
    }
}

// Display Books Added
function displayBooks(book) {
    myLibrary.forEach((book) => addBookToList(book));
}

function addBookToList(book) {
    const container = document.querySelector('.book-section');
    const card = document.createElement('div');
        card.classList.add('book-cards');

        card.innerHTML = `
            <span>${book.title}</span>
            <span>${book.author}</span>
            <button class="not-read">NOT READ</button>
            <button class="remove">REMOVE</button>
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

// Remove book
function removeBook(el) {
    if (el.classList.contains('remove')) {
        el.parentElement.remove();
    }
}

// Toggle read status 
function toggleRead(el) {
    if (el.classList.contains('completed')) {
        el.parentElement.classList.remove('book-read');
        el.classList.remove('completed');
        el.textContent = 'NOT READ';
    }
    else if (!el.classList.contains('completed') && el.classList.contains('not-read')) {
        el.parentElement.classList.add('book-read');
        el.classList.add('completed');
        el.textContent = 'COMPLETED';
    }
}

// Delete book from array
function deleteBook(title) {
    myLibrary.forEach((book, index) => {
        if (book.title === title) {
            myLibrary.splice(index, 1);
        }
    }); 
}

// alert for error during submitting new book
function showAlert(msg) {
    const div = document.createElement('div');
    div.classList.add('error');
    div.appendChild(document.createTextNode(msg));
    const modalClose = document.querySelector('.modal-close');
    const form = document.querySelector('.modal');
    form.insertBefore(div, modalClose);
    setTimeout(() => document.querySelector('.error').remove(), 5000);
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
    
    if (title && author) {
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
    } 
    else {
        showAlert('Please fill in all fields');
    } 
});

// Remove book
const bookCards = document.querySelector('.book-section');

bookCards.addEventListener('click', (e) => {
    //remove book from UI
    removeBook(e.target);

    //remove book from myLibrary array
    if (e.target.classList.contains('remove')) {
     deleteBook(e.target.parentElement.firstElementChild.textContent);   
    }
});

// Toggle read status
bookCards.addEventListener('click', (e) => {
    // add/remove read class
    toggleRead(e.target);

    // change read status in object library
    console.log(this);
});


// change how they are displayed based on read status at first
// add errors for empty modals