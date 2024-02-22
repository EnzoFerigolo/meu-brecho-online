import express from "express";
import roupas from "./roupas.json" assert { type: "json" };

const app = express();
const port = 3000;

app.use(express.static("./views/public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { roupas: roupas });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}.`);
});
