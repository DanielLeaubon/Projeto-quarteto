
const port = 8080;
var cont = 0


const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'))

const cors = require('cors')
app.use(cors())

var vetorDados = []
if (fs.existsSync('cadastroDados.json')) {
  const dados = fs.readFileSync('cadastroDados.json', 'utf-8')
  console.log(dados);
  vetorDados = JSON.parse(dados)
}
var vetorDadosVacina = []
if (fs.existsSync('cadastroDadosvacina.json')) {
  const dados = fs.readFileSync('cadastroDadosvacina.json', 'utf-8')
  console.log(dados);
  vetorDadosVacina = JSON.parse(dados)
}

/*
app
  .route("/")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
  });
*/

app.get("/", (request, response) => {
  response.render("index");
});

app.route("/motivacao")
  .get((req, res) => {
    res.render("motivacao");
  })
  .post((req, res) => {
    res.render("motivacao");
  });


app.route("/sobre")
  .get((req, res) => {
    res.render("sobre");
  })
  .post((req, res) => {
    res.render("sobre");
  });

app
  .route("/agradecimento")
  .get((req, res) => {
    res.redirect("/");
  })
  .post((req, res) => {
    let nomeForm = req.body.nomeInput
    let idadeForm = req.body.idadeInput
    let emailForm = req.body.emailInput
    let telefoneForm = req.body.dddInput + '-' + req.body.celularInput
    let CEPForm = req.body.CEPInput
    let enderecoForm = req.body.enderecoInput
    let tipoSanguineoForm = req.body.tipoSanguineoInput

    let cadastro = {
      'nome': nomeForm,
      'idade': idadeForm,
      'email': emailForm,
      'telefone': telefoneForm,
      'CEP': CEPForm,
      'endereco': enderecoForm,
      'sangue': tipoSanguineoForm,
    }

    console.log(cadastro);
    console.log('\n' + JSON.stringify(cadastro) + ',');

    vetorDados.push(cadastro)
    fs.writeFileSync('cadastroDados.json', `\n${JSON.stringify(vetorDados)}`)

    res.render("agradecimento", { vetorDados });
  });

  app
  .route("/vacina")
  .get((req, res) => {
    res.render("vacina");
  })
  .post((req, res) => {
    let nomeForm = req.body.nomeInput
    let idadeForm = req.body.idadeInput
    let emailForm = req.body.emailInput
    let telefoneForm = req.body.dddInput + '-' + req.body.celularInput
    let CEPForm = req.body.CEPInput
    let enderecoForm = req.body.enderecoInput
    let vacinaForm = req.body.tipoSanguineoInput

    let cadastro = {
      'nome': nomeForm,
      'idade': idadeForm,
      'email': emailForm,
      'telefone': telefoneForm,
      'CEP': CEPForm,
      'endereco': enderecoForm,
      'vacina': vacinaForm,
    }

    console.log(cadastro);
    console.log('\n' + JSON.stringify(cadastro) + ',');

    vetorDadosVacina.push(cadastro)
    fs.writeFileSync('cadastroDados.json', `\n${JSON.stringify(vetorDadosVacina)}`)

    res.render("agradecimento", { vetorDadosVacina });
  });


app.get("/salvar", (req, res) => {
  res.render("formulario");
});


app.use((req, res, next) => {
  res.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
  console.log(`Servidor funcionando na porta: ${port}`);
});

