/* eslint no-use-before-define: ["error", { "variables": false }] */
import { getBook } from './bookStorage.js';

const bookList = document.getElementById('books_list');
let books = getBook();

export class Book {
  removeBook = (title) => {
    books = books.filter((book) => book.title !== title);
    localStorage.setItem('books', JSON.stringify(books));
    loadBooksLocalStorage();
  };

  validateForm = () => {
    const bookObj = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    books.push(bookObj);
    document.getElementById('form').reset();
    localStorage.setItem('books', JSON.stringify(books));
    loadBooksLocalStorage();
  }
}

const bookObj = new Book();

const loadBooksLocalStorage = () => {
  const container = bookList;
  container.replaceChildren();
  for (let i = 0; i < books.length; i += 1) {
    // Creating the paragraphs
    const tableRow = document.createElement('tr');
    const title = document.createElement('td');
    const buttonTd = document.createElement('td');
    const button = document.createElement('button');

    // Creating text nodes
    const rowText = document.createTextNode(`"${books[i].title}" by ${books[i].author}`);
    const buttonText = document.createTextNode('Remove');

    // Append text to nodes
    title.appendChild(rowText);
    button.appendChild(buttonText);
    buttonTd.appendChild(button);
    tableRow.appendChild(title);
    tableRow.appendChild(buttonTd);

    buttonTd.setAttribute('class', 'button-row');

    const bookTitle = books[i].title;

    button.addEventListener('click',
      () => {
        bookObj.removeBook(bookTitle);
      });

    container.appendChild(tableRow);
  }
};

window.onload = () => {
  document.getElementById('form').addEventListener('submit', bookObj.validateForm);
  loadBooksLocalStorage();
};

export { Book as default };