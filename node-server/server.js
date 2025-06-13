let express = require('express')
let app = express();
let body = require('body-parser')
let cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(body.json())

const hostname = 'localhost';
const port = 3001;

app.get('/home', (req, res) => {
    res.header('Content-Type: application/html').status(200).send('<h1> Meu servido Respondendo </h1>')
    console.log('Chamada executada')
});

app.post('/email', (req, res) => {
    let email = req.body;
    console.log('email: ', email);
    res.status(200).redirect("http://127.0.0.1:3000/")
});

app.post('/email/json', (req, res) => {
    let email = req.body;

    

    /* Salvar o email */

    setTimeout(function() {
        res.status(200).json({status: `Email ${email.email} salvo com sucesso`})
    }, 3000);

    
    console.log('email: ', email);
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port} `);
})