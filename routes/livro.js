const { Router } = require("express");
const router = Router();
const {
  getBooks,
  getBookById,
  getBookByName,
  postBook,
  patchBook,
  deleteBook,
} = require("../controllers/livro");

router.get("/", getBooks);

router.get("/:id", getBookById);

router.get("/:nome", getBookByName);

router.post("/", postBook);

router.patch("/:id", patchBook);

router.delete("/:id", deleteBook);

module.exports = router;
