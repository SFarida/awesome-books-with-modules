import { Book } from './modules/books.js'; // eslint-disable-line no-unused-vars
import { addDate } from './modules/addDate.js';

// LOAD PAGEs
const loadContent = (startPage = 'list_link', destinationPage) => {
  document.querySelector(`.${startPage}`).classList.add('hidden');
  document.querySelector(`.${destinationPage}`).classList.remove('hidden');
};

let previousId;
const setId = (id) => {
  previousId = id;
};
// Add onblur event Listener to each nav botton
document.getElementById('list_link').addEventListener('blur', (e) => {
  setId(e.target.id);
});
document.getElementById('list_add_new').addEventListener('blur', (e) => {
  setId(e.target.id);
});
document.getElementById('list_about').addEventListener('blur', (e) => {
  setId(e.target.id);
});

document.getElementById('nav_list').addEventListener('click', (e) => {
  loadContent(previousId, e.target.id);
});

addDate();
