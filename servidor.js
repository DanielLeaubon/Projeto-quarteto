
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

var vetorDadosM = []
if (fs.existsSync('cadastroDadosMedico.json')) {
  const dados = fs.readFileSync('cadastroDadosMedico.json', 'utf-8')
  console.log(dados);
  vetorDadosM = JSON.parse(dados)
}
var vetorDadosP = []
if (fs.existsSync('cadastroDadosPaciente.json')) {
  const dados = fs.readFileSync('cadastroDadosPaciente.json', 'utf-8')
  console.log(dados);
  vetorDadosP = JSON.parse(dados)
}
var vetorDadosVacina = []
if (fs.existsSync('cadastroDadosvacina.json')) {
  const dados = fs.readFileSync('cadastroDadosvacina.json', 'utf-8')
  console.log(dados);
  vetorDadosVacina = JSON.parse(dados)
}
var vetorDadosC = []
if (fs.existsSync('cadastroDadosConsulta.json')) {
  const dados = fs.readFileSync('cadastroDadosConsulta.json', 'utf-8')
  console.log(dados);
  vetorDadosC = JSON.parse(dados)
}
var vetorDados = []
if (fs.existsSync('cadastroDados.json')) {
  const dados = fs.readFileSync('cadastroDados.json', 'utf-8')
  console.log(dados);
  vetorDados = JSON.parse(dados)
}

app.get("/", (request, response) => {
  response.render("index");
});
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-----PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE----------PACIENTE-----*/
app.route("/cadastroP")
  .get((req, res) => {
    res.render("cadastroP");
  })
  .post(async (req, res) => {
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
      await client.db("Projeto").collection("Pacientes").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("paciente", { vetorDadosP });
  });

app
  .route("/paciente")
  .get((req, res) => {
    res.redirect("/");
  })
  .post(async (req, res) => {
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

    vetorDadosP.push(cadastro)
    try {
      await client.connect();
      await client.db("Projeto").collection("Pacientes").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("paciente", { vetorDadosP });
  });
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-----MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO----------MÉDICO-----*/
app.route("/cadastroM")
  .get((req, res) => {
    res.render("cadastroM");
  })
  .post(async (req, res) => {
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
      await client.db("Projeto").collection("Médicos").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("medico", { vetorDadosM });
  });

app
  .route("/medico")
  .get((req, res) => {
    res.redirect("/");
  })
  .post(async (req, res) => {
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
      await client.db("Projeto").collection("Médicos").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("medico", { vetorDadosM });
  });
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-----VACINA----------VACINA----------VACINA----------VACINA----------VACINA----------VACINA----------VACINA----------VACINA----------VACINA----------VACINA-----*/
app
  .route("/vacina")
  .get((req, res) => {
    res.render("vacina");
  })
  .post(async (req, res) => {
    let nomeForm = req.body.nomeInput
    let idadeForm = req.body.idadeInput
    let emailForm = req.body.emailInput
    let telefoneForm = req.body.dddInput + '-' + req.body.celularInput
    let CEPForm = req.body.CEPInput
    let enderecoForm = req.body.enderecoInput
    let vacinaForm = req.body.vacinaInput

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
      await client.db("Projeto").collection("PessoasVacina").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("agradecimento", { vetorDadosVacina });
  });

app
  .route("/agradecimento")
  .get((req, res) => {
    res.redirect("/");
  })
  .post(async (req, res) => {
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
      await client.db("Projeto").collection("PessoasVacina").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("agradecimento", { vetorDadosVacina });
  });
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-----CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA----------CONSULTA-----*/
app
  .route("/cadastroC")
  .get((req, res) => {
    res.render("cadastroC");
  })
  .post(async (req, res) => {
    let nomeForm = req.body.nomeInput
    let idadeForm = req.body.idadeInput
    let emailForm = req.body.emailInput
    let telefoneForm = req.body.dddInput + '-' + req.body.celularInput
    let CEPForm = req.body.CEPInput
    let enderecoForm = req.body.enderecoInput
    let vacinaForm = req.body.vacinaInput

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

    vetorDadosC.push(cadastro)
    try {
      await client.connect();
      await client.db("Projeto").collection("Consultas").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("consulta", { vetorDadosC });
  });

app
  .route("/consulta")
  .get((req, res) => {
    res.redirect("/");
  })
  .post(async (req, res) => {
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

    vetorDadosC.push(cadastro)
    try {
      await client.connect();
      await client.db("Projeto").collection("Consultas").insertOne(cadastro);
    } finally {
      await client.close();
    }

    res.render("consulta", { vetorDadosC });
  });
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/*----------------------------------------------------------------------------------------------------------------------------------------------------------------*/
app.get("/salvar", (req, res) => {
  res.render("formulario");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Página não encontrada.</h1>");
})

app.listen(port, () => {
  console.log(`Servidor funcionando na porta: ${port}`);
});

