const {
  getAllBooks,
  getABook,
  getABookByName,
  addBook,
  changeBook,
  deleteBookById,
} = require("../services/livro");

function getBooks(req, res) {
  try {
    const allBooks = getAllBooks();
    res.send(allBooks);
  } catch (error) {
    res.status(500);
    res.send("Deu ruim");
  }
}

function getBookById(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const book = getABook(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("ID inválido");
    }
  } catch (error) {
    res.status(500);
    res.send("Livro não encontrado");
  }
}

function getBookByName(req, res) {
  try {
    const name = req.params.nome;
    const book = getABookByName(name);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send("Livro não encontrado");
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.nome && req.body.src) {
      addBook(newBook);
      res.status(201);
      res.send("GG, meu nobre");
    } else {
      res.status(422);
      res.send("O nome e a URL da capa do livro são obrigatórios");
    }
  } catch (error) {
    res.status(500);
    res.send("Num Fiz");
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const changes = req.body;
      changeBook(id, changes);
      res.send("Alteração Realizada com sucesso");
    } else {
      res.status(422);
      res.send("Livro não encontrado");
    }
  } catch (errors) {
    res.status(500);
    res.send("Num posso mudá saporra aí n");
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    let text = "Livro deletado com sucesso";
    if (id && Number(id)) {
      deleteBookById(id);
    } else {
      res.status(422);
      text = "Livro não encontrado";
    }
    res.send(text);
  } catch (error) {
    res.status(500);
    res.send("Livro não encontrado/não deletado");
  }
}

module.exports = {
  getBooks,
  getBookById,
  getBookByName,
  postBook,
  patchBook,
  deleteBook,
};
