let myLibrary = [];

function book(author, title, noOfPages, read){
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.read = read;
}

function addBookToLibrary(){
    const bookToAdd = new book();
    myLibrary.push(bookToAdd);
}

const bookOne = new book('Agatha Christie', 'Murder on the Orient Express', 184, true);
const bookTwo = new book('Arthur Conan Doyle', 'The Hound of the Baskervilles', 226, true);
const bookThree = new book('Agatha Christie', 'And Then There Were None', 264, false);
const bookFour = new book('Karen M. McManus ', 'One of Us Is Lying', 416, false);

myLibrary.push(bookOne, bookTwo, bookThree, bookFour);

const modal = document.querySelector('.modal');
const displayModalBtn = document.querySelector('.addBook');
const closeBtn = document.querySelector('.close');
const node = document.querySelector('.node');
const booksDiv = document.querySelector('.booksDiv');

displayModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.body.addEventListener('click', (event) => {
    if(!modal.contains(event.target) && event.target.className !== 'addBook'){
        modal.style.display = 'none';
    }
});


function display(){
    const size = myLibrary.length;
    for(let i = 0 ; i < size ; i++){
        const clone = node.cloneNode(true);
        const child = clone.childNodes;
        
        child[1].textContent = `Title: ${myLibrary[i].title}`;
        child[3].textContent = `Author: ${myLibrary[i].author}`;
        child[5].textContent = `No. of Pages: ${myLibrary[i].noOfPages}`;
        myLibrary[i].read === true ? child[7].textContent = 'Read: Yes' : child[7].innerText = 'Read: No';
        console.log(child[3]);
        booksDiv.appendChild(clone).className = 'card';
    }
}

display();