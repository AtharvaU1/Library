let myLibrary = [];

function book(author, title, noOfPages, read){
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read){
    const bookToAdd = new book(author, title, pages, read);
    myLibrary.push(bookToAdd);
    //console.log(bookToAdd);
    display();
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
const submitButton = document.querySelector('.submit');
let deleteButton = document.querySelectorAll('.deleteMe');

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

submitButton.addEventListener('click', () => {
    const authorInput = document.querySelector('#author').value;
    const titleInput = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const checkedOrNot = document.querySelector('#read').checked;
    
    if(authorInput.length==0 || titleInput.length==0 || pages.length==0) return;

    addBookToLibrary(authorInput, titleInput, pages, checkedOrNot);
    document.querySelector('.form').reset();
});


function display(){
    const size = myLibrary.length;
    while(booksDiv.firstChild){
        booksDiv.removeChild(booksDiv.lastChild);
    }

    for(let i = 0 ; i < size ; i++){
        const clone = node.cloneNode(true);
        const child = clone.childNodes;
        
        child[3].textContent = `Title: ${myLibrary[i].title}`;
        child[5].textContent = `Author: ${myLibrary[i].author}`;
        child[7].textContent = `No. of Pages: ${myLibrary[i].noOfPages}`;
        myLibrary[i].read === true ? child[9].textContent = 'Read: Yes' : child[9].innerText = 'Read: No';
        clone.setAttribute('data-value', `${i}`);
        booksDiv.appendChild(clone).className = 'card';
    }
    deleteButton = document.querySelectorAll('.deleteMe');

    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            //console.log('triggering button');
            const index = parseInt(button.parentNode.dataset.value);
            if(isNaN(index)) return;
            myLibrary.splice(index, 1);
            //console.log(myLibrary, index);
            display();
        });
    });
    //console.log(deleteButton);
}
display();