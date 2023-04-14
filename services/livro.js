const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getABook(id) {
  const books = JSON.parse(fs.readFileSync("livros.json"));
  const requestedBook = books.filter((book) => book.id === id);
  if (requestedBook != "") {
    return requestedBook;
  } else {
    return "livro não existe";
  }
}

function getABookByName(name) {
  const bookList = JSON.parse(fs.readFileSync("livros.json"));
  const newList = bookList.filter((book) => book.nome === `%20${name}`);
  return newList;
}

function addBook(book) {
  const allBooks = JSON.parse(fs.readFileSync("livros.json"));
  const newList = JSON.stringify([...allBooks, book]);
  const newJson = fs.writeFileSync("livros.json", newList);
  return newJson;
}

function changeBook(id, changes) {
  let books = JSON.parse(fs.readFileSync("livros.json"));
  const index = books.findIndex((book) => book.id == id);
  const changedList = { ...books[index], ...changes };
  books[index] = changedList;
  fs.writeFileSync("livros.json", JSON.stringify(books));
}

function deleteBookById(id) {
  const bookList = JSON.parse(fs.readFileSync("livros.json"));
  const index = bookList.findIndex((book) => book.id == id);
  bookList.splice(index, 1);
  const newJsonList = fs.writeFileSync(
    "livros.json",
    JSON.stringify([...bookList])
  );
  return newJsonList;
}

module.exports = {
  getAllBooks,
  getABook,
  getABookByName,
  addBook,
  changeBook,
  deleteBookById,
};
