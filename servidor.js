
const port = 3000;
var cont = 0

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dleaubon:sal1234@projeto.hxqcz.mongodb.net/?retryWrites=true&w=majority&appName=Projeto";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


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


app.get("/", (request, response) => {
  response.render("index");
});

app.route("/cadastroP")
  .get((req, res) => {
    res.render("cadastroP");
  })
  .post ( async (req, res) => {
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

    vetorDadosP.push(cadastro)
    try {
      await client.connect(); 
      await client.db("Projet").collection("Pacientes").insertOne(cadastro);
    }finally {
      await client.close();
    }
    
    res.render("agradecimento", { vetorDadosP });
  });





  
app.route("/cadastroM")
  .get((req, res) => {
    res.render("cadastroM");
  })
  .post ( async (req, res) => {
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

    vetorDadosM.push(cadastro)
    try {
      await client.connect(); 
      await client.db("admin").collection("Médicos").insertOne(cadastro);
    }finally {
      await client.close();
    }
    
    res.render("agradecimento", { vetorDadosM });
  });



app
  .route("/vacina")
  .get((req, res)  => {
    res.render("vacina");
  })
  .post ( async (req, res) => {
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
    try {
      await client.connect(); 
      await client.db("admin").collection("PessoasVacina").insertOne(cadastro);
    }finally {
      await client.close();
    }
    
    res.render("agradecimento", { vetorDadosVacina });
  });

  

  app
  .route("/agradecimento")
  .get((req, res) => {
    res.redirect("/");
  })
  .post(async(req, res) => {
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
    try {
      await client.connect(); 
      await client.db("admin").collection("Pessoas").insertOne(cadastro);
    }finally {
      await client.close();
    }

    res.render("agradecimento", { vetorDados });
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

