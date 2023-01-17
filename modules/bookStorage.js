let books;

export const getBook = () => {
  books = JSON.parse(localStorage.getItem('books')) || [];
  return books;
};

export { getBook as default };