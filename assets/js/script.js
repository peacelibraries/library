
// Placeholder data for books with PDF and image fit adjustments
const books = [
    { title: 'Best Friends', language: 'English', level: 'advanced', cover: 'assets/images/books/Best_friends/bestfriends.jpeg', pdf: 'assets/images/books/Best_friends/Best_Friends.pdf' },
    { title: 'Abel Sister', language: 'English', level: 'beginner', cover: 'assets/images/books/abel_sister/Abel-BL.png', pdf: 'assets/images/books/abel_sister/Abel_and_His_Sister_s_Doll.pdf' },
    { title: 'Imineke Ya Nyogokuru', language: 'Kinyarwanda', level: 'advanced', cover: 'assets/images/books/grandma_banana/Grandma-BL.png', pdf: 'assets/images/books/grandma_banana/imeneke_ya_nyogokuru.pdf' },
    // The book provided by the user
    { title: 'Cat and Dog draw and color', language: 'English', level: 'beginner', cover: 'assets/images/books/cat_dog/cat_dog_draw.jpeg', pdf: 'assets/images/books/cat_dog/Cat_and_Dog.pdf' },
    // ... add more books here
];

function filterBooks() {
    const language = document.getElementById('languageFilter').value;
    const level = document.getElementById('levelFilter').value;
    
    // Clear current books
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    
    // Filter books and create elements for them
    const filteredBooks = books.filter(book => {
        return (book.language === language || language === 'all') && 
               (book.level === level || level === 'all');
    });

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        
        const bookCover = document.createElement('div');
        bookCover.className = 'book-cover';
        // Adjust the cover image to fit the container properly
        bookCover.style.background = 'url(' + book.cover + ') no-repeat center center';
        bookCover.style.backgroundSize = 'cover';
        
        const bookTitle = document.createElement('h2');
        bookTitle.innerText = book.title;

        // Link to open PDF in a new tab
        const bookLink = document.createElement('a');
        bookLink.href = book.pdf;
        bookLink.target = '_blank';
        bookLink.textContent = 'Read';
        bookLink.className = 'read-button';
        
        bookItem.appendChild(bookCover);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookLink);
        bookList.appendChild(bookItem);
    });
}

// Initial population of books
document.addEventListener('DOMContentLoaded', filterBooks);
