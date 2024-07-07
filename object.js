//Task 1

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let test = new Book("Test", "Someone", 65);
let example = new Book("Example", "Somebody", 130);
let reader = new Book("Read me", "Cool Guy", 25);

//Task 2
Book.prototype.display = function() {
    console.log("Title:", this.title, "Author:", this.author, "Number of pages:", this.pages);
}

test.display();

//Task 3

let library = [];
function addBook(book) {
    library.push(book);
}

addBook(test);
addBook(example);
addBook(reader);

console.log(library)
function searchAuthor(author) {
    let books = library.filter(books => books.author == author);
    console.log("Book found:", books);
}

searchAuthor("Somebody");

//Task 4

function pageFilter() {
    let books = library.filter(books => books.pages < 100);
    console.log("Books with less than 100 pages are:", books);
}
pageFilter();

//add Title: to titles
function addTitle() {
    let books = library.map(books => "Title: " + books.title)
    console.log("Updated Books: ", books);
}
addTitle();
//add Author: to authors
function addAuthor() {
    let books = library.map(books => "Author: " + books.author)
    console.log("Updated Books: ", books);
}
addAuthor();
