const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: true,
  },
  {
    title: "H2G2",
    author: "Douglas Adams",
    pages: 224,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

myLibrary.forEach((book) => {
  const libraryDiv = document.querySelector("#library");
  const bookCard = document.createElement("div");

  bookCard.setAttribute("class", "book-card");
  bookCard.innerHTML += `<h2>${book.title}</h2>`;
  bookCard.innerHTML += `<p>${book.author}</p>`;
  bookCard.innerHTML += `<p>${book.pages}</p>`;
  bookCard.innerHTML += `<p>${book.read === true ? "read" : "unread"}</p>`;

  libraryDiv.appendChild(bookCard);
});

const newBookButton = document.querySelector("#add-book");
const newBookForm = document.querySelector("#book-form");

newBookButton.addEventListener("click", () => {
  newBookForm.classList.toggle("hidden");
})

const addBookButton = document.querySelector("#add-button");

addBookButton.addEventListener("click", (event) => {
  event.preventDefault();

  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const readInput = document.querySelector("#read");

  addBookToLibrary(titleInput.value, authorInput.value, Number(pagesInput.value), (readInput.value === "on" ? true : false));
});

function updateUI() {
  const bookCard = document.createElement("div");
}