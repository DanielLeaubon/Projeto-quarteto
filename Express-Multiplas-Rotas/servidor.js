const port = 8080;
const { render } = require("ejs");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { n1: "", n2: "", result: "" });
});

app.route("/erro").get((req, res) => {
  res.render("erro");
});

app
  .route("/soma")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 + n2;
      res.render("index");
    }
  });

app
  .route("/sub")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);
    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 - n2;
      res.render("index");
    }
  });

app
  .route("/mult")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    } else {
      result = n1 * n2;
      res.render("index");
    }
  });

app
  .route("/div")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    n1 = parseFloat(req.body.num1);
    n2 = parseFloat(req.body.num2);
    console.log(n1, n2);

    if (isNaN(n1) || isNaN(n2)) {
      result = `Digite apenas números`
      res.redirect("/erro");
    }
    else if (n2 == 0) {
      result = `Nenhum número pode ser dividido por 0`
      res.redirect("/erro");
    }
    else {
      result = n1 / n2;
      res.render("index");
    }
  });

app.listen(port, () => {
  console.log(`Servidor funcionando na porta: ${port}`);
});
