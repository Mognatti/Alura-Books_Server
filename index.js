const express = require("express");
const rotaLivros = require("./routes/livro");
var cors = require("cors");

const app = express();
app.use(cors());
const port = 8000;

app.use(express.json());
app.use("/livros", rotaLivros);

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
