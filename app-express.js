const express = require('express');
const cors = require('cors');
const fs = require('fs');
const listMoedas = require('./moedas.json');
const app = express(); //cria os server

app.use(cors()); //liberando cors

app.get('/', (req, res) =>{
    res.send("Olá, tudo bom?");
});

app.get('/moedas', (req, res) =>{
    // res.send(JSON.stringify(listMoedas));
    res.json(listMoedas);//mesma coisa que o comando de cima

})

app.listen(4000, ()=> console.log("servidor rodando na porta 4000"));