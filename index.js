import { DateTime } from './module/luxon.js';
import { addBook, getStorageData, displayBooks } from './module/books.js';
import Library from './module/lists.js';
import {
  displayList,
  displayAdd,
  displayContact,
} from './module/navigations.js';

const Listli = document.getElementById('List');
const Addli = document.getElementById('AddNew');
const Contactli = document.getElementById('ContactPage');

const library = new Library();
library.awesomeBooks = [];

window.onbeforeunload = () => {
  getStorageData(library);
  displayBooks(library);
};

const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('date').innerHTML = currentTime;

window.onload = displayList;
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBook(library);
});
getStorageData(library);
displayBooks(library);

Listli.addEventListener('click', displayList);
Addli.addEventListener('click', displayAdd);
Contactli.addEventListener('click', displayContact);
